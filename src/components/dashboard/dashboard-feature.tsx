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
    "2RiQU3JNMpTNAZPguwfRw5j2Lae2L8Kv67HDLj4174kwoY6R87ebK4HyqBmYCs7Qb1W3HwXG379SKSeBzXEvM9u9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tDez7pZ589Fs3tBbzRooP6Ci7gA4K4PsPiGVLUSF4NyB4DXvib1BiDkZmcCEgfybMsUPE1Wnr7uwf7SwUoMUHxb",
  "key1": "5waevUM56bmJVSRaJ3VC9YGTDPXDMTZtPY59pVHKxEm8AhaAPqmT2HKNSRR5YVXGMaCiTCUHvaZrUvrsu1pHmgRa",
  "key2": "5j53Wbx6R8Yg8PJKuEA8nQZwvMSwH6R1CUB2A9mekALLxQf36SJLpzvCUeVoH5M5HPkXZhC6kLS3Tt3wPbY3rbJD",
  "key3": "5kJBrTCnpFAb3nFCVjVKZPkEUtk1dQLUNeCdM7WbcgZkHZVYsE7Y4BSsCaReZvkT85W6t2WRxN5iUnGNbYCsNziL",
  "key4": "3oDkwcoAWSuiitELLfiXYedpE1WELYUs2a5j73R9X6258qaaAADSFPX5hHN6c5KJrAMzNJQgzWFzY5Hj3x74pv83",
  "key5": "5AsjvvQR3dR5uXU4vpaj8xEeQFjRMWmFBr3HbtwkbgDcrGtsr75XVQLUJiLdYLFPa7vfLkRx4JUe4cKBeEbSuNNN",
  "key6": "3eGMbQna9aLvRpcFikvMkFnesrBwhaBYJ5eZt9zoyG98AkV2ELkTJEgw1N3zKL7ZH7K52U8pRuGSkxfoiJ9SNFQj",
  "key7": "KpbQtXu7TVmNcqeRp1XqxebLzrherQo6pwUKXYpUHhP8aWpMzxwAcaUCrJt1ydqGaRjUQtZtJNBd7Fyh3p2JpMQ",
  "key8": "idiMGdNox39ww7RhpQnNhMKZGA3oSv6Fn4qwdKjZpxfir6CN69bpjLt38EpWeHTtquWBuU9VS2HdpvYwyiTjaZ2",
  "key9": "3M58fSNf67ucHkvLcA675SHJ5R9xgi9uYZX8khD4AqUkkPuSGUuiHKbdxbZQLsmnYFWtUvAZbpqHgJamEzPX44Qz",
  "key10": "3QzQmhhoMH6RaiuTftSQLxW4VmxC7DEDzsKj5vDMTZvfwtfipsEJntAUgS3HxG4RJsDTs1kurF3HRk66aAvvejRu",
  "key11": "5Crpk2TiVCeFz9h9bTMxwVrbTnpnZNtYdvgaq1NzLUcb5AwGLPiSqL8my6Ki8zg1VFDwmoWd2KWa5uuQmZLCGqDN",
  "key12": "ujT8oj8eecyh9b3yvfCBQNe3pvaLPoLAUuxK5b6LTc6RvzfzjGZXxBvnmS5QQRfP9yqu3ZXxmcs5wv863b6XAYy",
  "key13": "2KoPDrvHsDsmqV4EhHpX68HAq341qnUdXKFFZpBaz9eKnjiRKN9WK89zQzUvMUK8gsECS7o1nAMWG15HYkdedkdA",
  "key14": "4Q2TrRvStn8LTZBPKeLdiU3N5d7Xr9vCPKFJ7uMsuWyx5Yvqx9j7peW5mXGQo2fS6DnQhTAVEkMKCxGpZi5dVmL8",
  "key15": "2bfyUqsjU2SCS6HtVXWZBrHKjYDdy4Zf7EmQ4wbyT4qmpC5Fc64ZQUMAXVTwsBfHp5U1Wcz5JRy69fhH3BkCDiHs",
  "key16": "3ven8Mmw52ddfk7FpVxmRNtDYjwvUQmPA9YczGsAU9LRaYdZwPpmVCcqSZQHf11t2Kg6uccVSK3Gw6oDF44Fattw",
  "key17": "3rxSkS5jsA6U8aAtyVuAUMysGFmLZsDLun2k9KqT8djW4M5QJu4xQY2CT8CtkNLQ3BfeQ72S3824EnU8cMFkjv1F",
  "key18": "64NMvXYJVQcpy3f7xt93a6ntaeykZLCaLFRedkMsKiGZh2FwfZPhsBaP2AQGNvCnqAfx5pQNuTFAmEGFzWByFEBh",
  "key19": "VrAnWdrM29CUhAXCm5J8sY9spnvfBQtPoGxoLXFvWuUBLcVaWnNu1XiGHjdjCJT7b6zhsmtxswGjjxiBCfzMLnz",
  "key20": "2RwhWgoEnKs7p6UqrxwfQDJzzyBraugrjQL5gxPeD4uscJitbAyX7RZYUWx5Jm49bgnVATQ6j41t6a1sBEn2QVh4",
  "key21": "2oKYrxA6TNLDDi6FJa3UdREprnKfWuPNWtMttvoTFSvwm8nGzqWLAznFD5woDxJrpvoAMGVrsXVnVN8XeQZvFZyk",
  "key22": "52FscqioU6YNAuxzi54SB7SXYURhehYTpdnrEvgbJSUxjWtsf2KvHAetm7jHqnyjaqGwSoi8TfBUxJALub4Rm13Q",
  "key23": "2wEQ89LL6kbuM2n7u55CrA2XVizjj8T2mgQSsGEMdqnsErEV5c4X6PwtCod5eQCmbydaUVJqbC7nnTztMum5zyZ2",
  "key24": "5UD5Zt5n8SusxeLF7PARVG7Fqokp2WL1iScaU93mGfNUTimHGGaAwsNKTbYnu1xDpfVaxagVgJEPY8FjiQ96G8C4",
  "key25": "5UtdXbzir2NEPW7xnqJta3KFgi67wXJUu1VFDS6G46aYwgUMZCaGZDgKVSgL9EJ3BmDsdTjHqukAtezYhtMYTmiW",
  "key26": "3X5WwVeedXJGRHB9ruRuGo4hAQVFkG3hrNeLF4UwCtpS6eJKZ6PHS2iZHaNhoJqQcZHQaRNKS6MFghNvrPcoBvTi",
  "key27": "3bjSUyiep1Cy735d8Ck1qecxKgs9KqKvAfWv3eE5jpTW7jtLSEhfd4t8qEXcTUhJB21mupE9mvNBYgSBFunAk2V3",
  "key28": "2oqsDgreZv7k2nznbLWTCW8Ly5tuVVNsiJVvKu4PQpHKfLh9Jhc9p9HGYo9wZa2SVf1wg99yShBf4dsfDpEaor9v",
  "key29": "2Evk2kjcRRJAwWnAXmWFZYFjquVV2y7tgqaGTSfjGXbiBjFVbypCTV4QmXFkPPHFzHG4XqtVyEYjD2VHDjGAc1mF",
  "key30": "4eHRaip2TcEj2etD1qsXVuzH74CGz9XmBLXCVBf4ADzgzGM7wr8wRKsTEQo4hdUq655u7c6qsmVATrBcYZ6SSFEy",
  "key31": "3AWR3LpAep8KrYkTFVcyf3Ni5z8XgxiTJAME6mEjPhtoUrs5iTPtyB61hX394M8ML5jHT9B8biWgRVXxWd25Sx7U",
  "key32": "5vXD7614Lk78pM46gRt1FPdWjjPwjNDVnrvtuRmFtGaPfJsbwg2BVPVYz34yPzatSuBz44NZC7GxzXw3pqFDt3bP",
  "key33": "Cuh5f9BogX4BRxyvSTDC2pYQGkywsd2HWc3K72XYqTuzZWmRSDeL9Tg5xbfVe9MCxua7SFf7g5sHVJZ9X52mch2",
  "key34": "65wef3ZU5enyuECLf9iwvUVgdaNV95yNVcbCFw7A2zPvuK6QPyBq1tXXtMiVw9YXbtswW4HdhqW4uxc68TcvWTQv",
  "key35": "3M9GSfRRhCMg9zsbMw2d3wZVyY2x3eN9y5ZuuSh2N9hvsQiknkLyp93ZGCnG33S7RsvMfqQ6KHqCCAu8ru1j6Kco",
  "key36": "2CX3Lj8S9EgtDAtV2YkHYhKyS2BjTZEVRSw51fVVWPupEnBi3aLW7cE1p1PiN9wUEuW22xhLBaGPgoxDVvitL2Bx",
  "key37": "5umugEmWiRJCqR1SKKFmmdtE7FBMxN73NwZ7s1kYpvQKva2W36ech4ahb62JDgGyfWu3HtBSCciLLSJLKP1uFRp6",
  "key38": "2j4JCDMBZ8dSt5TDnxWkvoMprfnift8a566sikxG4LmSPKzZFe472tWMNA9CaQq7jiJCK9RZXkZEgJS1ygm59y2a",
  "key39": "4gZ5pu5XNG3TYgEEbi4Xsje5sRFoUd9JErmVez6iggaHfAmKwMpv1MHz8LrgUjr7zkPgXVThvuSSMEKBCDrq9ny4",
  "key40": "kvbyfE4Y9PNaCZAzKLHZehFaH7AoJCzi7tAvDdwVpEPYGHCxjCQWew5UbDBCbTQmRkaVbNKqSwkHDPUKprtzEqZ"
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
