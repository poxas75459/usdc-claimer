/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3iQqJQXyaq6gDewouNBpRCNXT8HWwnRMtgjRSvAXw9ycrm5p813b1uKzoStNakh1QLigDLd194ytecCWgob1XQ8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gLiXBvQt7LXxrq4TGkCSyZqoq6kzQkaDLVwkfqhQDhH73wm7UiDbnA7Quio1wnbCyk6tzWDpNdq68FoE24WSyhK",
  "key1": "34pR81ATUJv9DLEx6t5cmmLezKJFUbEBLwcNpik8TrA4DodqaQdzXmibeqMcvb1W1juSicQzeWnB7ZAJC62HHim4",
  "key2": "4zuCaGN1kp2TPjwEVYCQbpFkWcFo9U1X4vKu3nm2LquSygMNhmQnZURp83e5pui6fKarSF8V8ey2MANfWCsJQ2Pu",
  "key3": "2gphguheem9uXf6iyDKhsPmKzvFXvpaL7YDkGF7qgo4shd7Ah67btSMNXVL99tfF2Mgx1BDJBQDqYqzRQhYJWUqp",
  "key4": "bNswqQ4erdCBea1xsUkhfXd5A4NuDqmH3iB7rpY1oF5yhgQTf5Xu6Q55gcfChyeTh9qdnHswFpgmYBJ76CYDdDn",
  "key5": "471AosuS1uC29GTX1FCJ5PtRKLH1y29LA15J1e5n8dQCfFrZk5TctrxpdNiNMfGaQf2rKNaPCevgnHpzZ2zNTbKh",
  "key6": "bFpx2GfGzvvD41E2GmQf7gr6N6dZg3Ek1XoReVLhdmym6wXRuvK2FCP42W28yr3oeHSpTpsUSasfqLWgBwgSTg4",
  "key7": "3LWMW2nsDYU32M4xmGggv1nfxaHnzREEPytUYsASr95kPBiWjHHvg84X3suPe5imVCWkPf78yXK91Fh43pQ45j54",
  "key8": "3DyWrqCNmymdNR3ghyhfLinQ7WdRhFYLc6dEPyHgADoC7Cv16bcVEUfymXsCHqwgkG5oQPwwkkXFsLpbhuCdAjWa",
  "key9": "5VKG5BPE69n1eC4BwtvQvrBiirFwhgULr39SauFHspqnWEvpsep9kgRnL5b3tfRRj322ZJijtxxzgiQsufKizMPM",
  "key10": "44jZ2fKJfV1nU82GJ4f61NQYbRd363HM2i1QfCGyVA6hYFedyRTN2cnFWcNxfPRdqcJkcrpkNHWaA1Rm3eqTNtgp",
  "key11": "JTJD8s8PWXkwZngbq7fC7GkkRwpSpTUNig2rttDB42zUZV9U7Wz8bdn3XuJPBWLKFWhDTNSahJMYRuEXpjheyPu",
  "key12": "L7awBUAsb1ZFbixzPyznskTC3vRKFrLsUFUqX5iskxYybwcUt9jkBAniKz5e3u7RJYavv1s6PpC9AYHp1vW697Q",
  "key13": "2xoZepXFj3BghKm5YqaShKExVxYT4TnVGe6XCfaeyyq5L1UKzj7b6uYHnm9aHSfHHeYEwu19GHXGSkubQ9oo2jxU",
  "key14": "5Q5xqPcLN1zdRVbUcV6NH22PJWtTW3VMTsj1MPsz9ooU5mhjwpMtZuztL2cqtsTcLgSWiDmRJWnrcsE6YerE3HdA",
  "key15": "5bBNcPnuU4kuaoFCTJFDJ2H6mFsZvuZZFFc92LBrauMb1VqiXa8onkkVa51jXogJvffiWjG3qCQJDXYoGdgy5xt9",
  "key16": "59fKv1funmXoduD3CXqv5utFWkDMxScj2jgPX5wWDTZ1sBs8G8My3T29YJN4tbQNa1J5EbEeb32QUHFf6C5AFMJo",
  "key17": "2H1YbD4pVadwBMMGcHutCqwfY4Z5rxeHDETmipiJTbgMKspQsC1fyvVUvCCcN8ZGoHBhXU6htn3rqnNcXxzBGpwQ",
  "key18": "5zQKW242F7mxw4G8UMiXgujdA7UTekF7kgAhKAWxs3HHaqfeoUUPKPVpFAtS8B1rkzN99q5GbSm18KveYu2nwGcb",
  "key19": "5nuLZ7VVdHhEmRrvhdy1SrbYumK31WaWw3BpkwXvn4LdKNGpKeu9M1i48UUPU7pKBfCBbJ7P6RUGVfUbpauDL5mm",
  "key20": "3FjQV7zeCyEj5UaSp6j2HyFD9GyYE9BSGqohi9egLDy9baLJKAQ2f3dwyP9fmYxf3DKXLBz8qJhLrs2h19zr8Kz8",
  "key21": "4Kc2SNaXXrzAyLGwqQ6p2MX17bpsMa1iz6TRaDRYgz2ex79Ft1ABCDWpUfsyrFwUAKVavQZxHEEjbL88ALCAFThE",
  "key22": "3ir2fZ7j9ngGNYGEqzYPD1r9jgupvAUzgnwKyRmVY4GfoDtuAqA5WHSydezDaXaX1rmdUpHSBoidVJmzGpmFrJSh",
  "key23": "4gz44F2z91zaVzAUxfWDdmRDsLyvG1jzHADv2qYZuDGyCtXdTB2SSEmVyudVURLGshxTizSfwdHbpU6rLydTdaQD",
  "key24": "tCYSWjwKpk2RH5YKytbPdBqUcp3g2GduPTHJ4W3vCqf38FTj9qeQJAiGnNsRUFLK3xDY7uWQXCmVPoTptTjRcS3",
  "key25": "3pYi4Qat7cv9wbLRJvRbrK3e6MijYNACVBmGM3HgaiNCM8aoNe667exePETLf8br7CjzrozG342tTwWCafAMs1sG",
  "key26": "3Fp5YLa1Z3LNUsoHzAg8eCr5vb6F4fkjJRCpq8qjq7Wozabg924tJU7EJnkLDmHifBoZ7x2wET3pQyxUzaNxRHxV",
  "key27": "3rnQJyQwPwMRwacw46KhjrfkREPKKoqxXUty1wur6Qk61Aq1Mpfj8wi6mVDDRgZ3c8Uh4hwhai178NpZk9V9Mwpq",
  "key28": "5MhzTtpA9J5Kusn19m6YUuWwXksC3dNTQG1hLD7E73P2g7gMavAQ999yGhyCYnTk2tVrYhC6TpfVdLjiWPxbe5qM",
  "key29": "X3gHnqZ19FmXf3LS8CixKoXCcbr5RgDg7u5xTccZ16nXu67Xi73uGhwLusPrUVkuG1o4eRJrgu4Lno3oQ36U3Az",
  "key30": "31upumFHy7pUVUeHjUiJvvffSPvLTH8Qb4upFLXES1GzN3vBuGsTkFiBXLS4Ku9J7ncrdP1GHAjPhqG9BNJNty6D",
  "key31": "129YwBqVPnG5r9zzgKfhcsfD4xj6GJ38BEkyfFcWuPEV9TBZHniDeyjFSp4S3s1XZeDNUMZrLB9NDDLVhVrZHeQC",
  "key32": "3NuULwa6XLEPic8fZpEKX6Lat9DZvVBMnZYZLL5S21P21bk3LWhVr8XWqE5g84Six8GA2Suwuuf5wYWiUhVXMeae",
  "key33": "5fVGBSDp2WcT99XbMqh6SdeLxGtr6v1rPd4UiMhE1sE7RB5t1cdjbnRipWHXLCacCUGpBbEgb2Abk9PSG1wNZCXS",
  "key34": "5y6741LZEynvSmf1utqnzJ2DCu48bpFvZAdCKsMUHC3iMGkLv1n7HXKP1EzKu8UEFNSeKwGsBGMX7JutsthsuBMC",
  "key35": "64os8TjeP5njsJxeVhur3fqMPWb3Ttg5R5EZgiz8DL6P4GqtfkaC47hp9DpjhNmUEEY3BfyrvbfEyUDdr6TtGTHd",
  "key36": "2S98CmamJnuRukUeH7uxSDjKgDqTeY7sWhHjxJhcxc4xbvfH5vtUMXSSASykPJ6knyi2Vko6o3S9Gd6SCCFoy9So",
  "key37": "4esEkEP28EFsowGpEJpp1QnzanEQyHxfjyrgdewmNt4Us7LTtUnCyPeCiWKee45VnxdgPi3Gz26ax73rhtxeHfiB",
  "key38": "3ZA3zu3co5boVnWTtVBGT7TPCT3UkMdmDKmxaTQLAqzKPh8n6KMPjpAkh5KSLWSFsoJtB9NVfWcFQNqvyQnVepQC",
  "key39": "3n2vX1fhjiLnprNe5yCrYKwR4uYhqmVEf2TC6HArssMt38ZnHGRSxa7tSM5Jp4ZGbY2hPMS7rGw4RwN6sYWgM1qL",
  "key40": "4JvqkibBn9CnkkCYdNrfdKfwAhUFYqEppyvuvoXGL7Q6JJtDrz1D3RZT3f4pBpTdVqbCR1XKEXznykekWjErbVWg",
  "key41": "62Y7PgUUHphaVqkFBtfGoDZ1c8iHjncvCKbJwZZoRuEAvk3ybruZAqHkixtjZtSz7eAfhfgo1AeLijV4vzZUuBct",
  "key42": "53Unu6BEKXrgJ1wiAbugZ79vJdqgFNC3xsbBHZNP38XtA82weYZCzwV9rByoLRbZSJQUSnqG8d9uoAJDrsZ5b6qA",
  "key43": "2NTHNKSune2LpAZvaBj3XRo9DZH8AgdtwnHZSnDefzFLcsuRgUmXoVQdWhaFJkfv15Ni43hgpjUASb47EBxrCEcH",
  "key44": "42gaYaXhDa1bkkL3xvf6a2dwpd5fQDsPEn8Pv9KUxYHs2ynqtCfgxMLBxHzJsabvuC8Tj3LwtmyP2Q5fenCp6jxA",
  "key45": "2xzk19qTc5jK1eWSi5cqruFzthsvpXojgV1Et2Npq4Z5TEixt1UUoM14YD4AZdqyzRaYsXWkj7T4gs1KUBdHwXs6",
  "key46": "3ghhpz5u51Q5GKoKTmNDgfoTsKyzhsN1PPtuo5eQJdp8UA6NvJWTUTKsZqBpptt1iitj8P31d2MNBeZX8QyByyJq"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
