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
    "2zsVVMDSn8FitGxqiaKkrvLkGL1kNJsQnM3Dt1voSV2scT9w3pFoFKC8jyAKdK7PfgKJce3RbnPfcTyBEbiBveeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JXTgYzMbgKye1ks4972eEywPqEvm2NHPnuG3qmTGaLTiGeX9LhQQgehp4JuHKewikxMNX6MP3dqty3S2LD4P3wr",
  "key1": "5CSczFWSiLqs38EDL9fXu8Ht6KHZZ57knwdEY3aWX7ktjxwDVvrpaPkfyqqj54gknFiUeLJMPkPx4y2h1qCZonuH",
  "key2": "2FFdRWa8Res9WXwkih5NM3TwNT3huiDNAm4dRcBNFnF3benGjyLkZHp8M1t58ifC51SjsDgJi3ovrTTA3AWhbwpD",
  "key3": "hmQeNNXSyWcm9a6mXXVWdn4987Uq6ENDNZuKkQbjTiyCkbVQ1XcFTJzFoDqu2mnngQ1eeV6N1o9S2uzmRQBT1Ly",
  "key4": "VMoeraFD2NTJRtCtRpW74xbAPaVH5WAbmnYu9mYBXZqMwABG575Dkn1NroErTqNpS6QcYCJe1hfwGpWdJsBXpfq",
  "key5": "244pgMxDWnorSrKvQ5J9DJf6Sx4QVLgqD3sdxnuwGZxEv997S5zepB3D1ibE9R54VE3Rb8sqAiu5RDcVq3qqnLXs",
  "key6": "3s3DnQGUfbQkSAypSC1tkfV2k7AEW5a1xMEV6Rmr8Nyc9vPYEfQv3CZwVLcDAj2ivKZNL2DtdWoRQin8QYHUtPN4",
  "key7": "2BX68MsKr4arv4BWhLDsgDjkXbpj6j8SbrGjaXbQRwaCwRdcUPcfX7srJdj3NW9MdxARoCwM8bw9F1TqjHHTjbmm",
  "key8": "3o1m5HxtdTToE3yGa8VosBx1haKpLyXj5GMgy4sfcHAvRNrEri5x8Ngqwr6Z2dN4mXWcckHrzDS9Liq8sMxZPu6N",
  "key9": "3E1aFUjurrU4SkZb7x3nh2c8jPFt6gym4gN3DDXKJYByShPPv2RfyTJgVLkYSXXCgeU4wvNQBxnYYtUgfqX2qouR",
  "key10": "2Z64vg9rvCt8r2QhzDDk24ZHRoFferijdzhfEuZazGbyTpVrPt1Ky8NWb1DDN1zzNpKoxp8bNQjz1YFapLeRhiJm",
  "key11": "3gv457Gz9onpNVybqmZFpD55iwFTYe7cW29GNAAcHK3dZxZsogie11F3nvamR62zBCy3LfPRhNRCeU7cQt9fZyBQ",
  "key12": "4vBGpxQwP7kAsXWPy56vafe4BwGtVqZwJHqoW2NoqX68KAq1C5yDto1uGNLWHPM3XKtiW7wwxXA9vXTbggXiodhM",
  "key13": "63aQ2dHBdtmSRkmfvmErjMN87ornSo5KvrWnx5aHbSSs4VrUfKviHbwvP6r2DcRcsGn3T2DN4UCXQS8mHCZYWVuk",
  "key14": "4gPxu3CNU1k4Bk4Zbny8XKK6ps4YvBERDZPpkBQpokDBdVuKNv49W28pHdD3YHHno24wMT33CdhCkRfsheuXszUr",
  "key15": "2Wj78cE96Mu5PRa5JEgfia6uQzbpRZ474e2ybiffEGz68ngL6fi33qpCJAscycsxCwNe8tHQWXxip6SEy2Vb6dD6",
  "key16": "3RgsutcWMv2LcZBVte7kPYMMEsrMPsxkJUKUwptdkivkowzjuYuq1BxAYyCvACaHqtGmeztS7MAxMzRVTxJR8dVm",
  "key17": "25YAwjdjhMfdk7o2Z6eiDHqKbFuVWbZgeyJP2dYuiHgGCPFpAWybFgxsM1xgYX2qDpqFYMgsnsasWgcJBXyAGWdu",
  "key18": "5u8a4gkqzpDbqwgbK47f3u9KtApe3pfeqTjNWmHE3So4iB8PyDSCoivxhnwBeVnSexTZ7A4u37hWVerukJ8t9MfK",
  "key19": "4MzHWUko9Wy1c3CKc9aTBMv1imcEhovpdAXvBQT2xzU2HbkVrUpAzB1zwTATfXTN1RGGAek1wwmsXQQ7bQRPodvP",
  "key20": "2CV6A4WDXbvb4o59HBXAtFFPs1P6vdTpwr8ZjWv7qjARwxPWpQxQc1aJozSnzodhXb1oG8nomvFdH6DXsAuugPg2",
  "key21": "5WxYj67SRwUp2y61CA8YhHyvCNkuAtPjwVfUS2xck9mzSCTxwhp9CWX8bbQDvZBzUSA7jHHJfUqkTGRxJCqMYLbb",
  "key22": "4Du7QsZK9GKFZdYvVckGJHTJigWc9Kkja9ZPqH2FLV55GiEsdmWBsFyRsJBv8cciu84woj2DLWHV3aSd2b4iDXcT",
  "key23": "Xh9tdjhBmZEvVdE5eJgVdCLbMPWvWJ5uj926Mnk2ZH1RejEBXZePnNCFUigUuP1GaiWdPCc5Ki2kSrPQHWjtRqE",
  "key24": "3zQQNnCw96e1yyfG8MdTAG4rZ3avpjp7WUdSWpmq4gEHayCYYRJ78ddRUqHFkFkEvpUFAiFncYMW22a5YgP9rRqt",
  "key25": "4exU8n5u2VUr9fgfrWTmV73DucAU77XmbCtSBkFV2CFC1S6mqwDLNbECadzxyo4Bky8bdyTwvQ9iz5Nnr7LWnwQX",
  "key26": "35nFMFWuh2os3V4JhXRuqmaFakeaJTc47TzuZN8FZyHx4WCxpX7L5BNUXkkPEfzRchNhRMvaXjTto84GJbo5LMVT",
  "key27": "2piUpbHQciobzKukiBTyoLAyErR2cejTuBMJ41DicwhpqsazKwxQmFHGV75Y2dfBkrKh1B4FQWigXhAxfGYsN7Nw",
  "key28": "grjkMzbF5WD5wsz2JNRBHcgD5zbgdmR1m3EGxWyviLHHi4V3wQpi2pVVkwHu5rCvQuQEhsuhoTqFPfGg3BwMetw",
  "key29": "5mZBq19UZAFgnhaWCB32uBy3ZUfcbsmMtY8nGUGZFDdLDQAsGD9PBY7niDAoKPHvUHmcK7cxCeFExa65g6CumyQU",
  "key30": "3zWBZbXyKaioY727gFoWxS5aLBUJ9DB7YWXSTpvc8mZ8Yhb2ESrGsNns8pgSjXjCrUGUx1G4D9GQRYbFnjFkFsbu",
  "key31": "fKGfT6FMhak8hs1KAnumVb2ek5m2YChsvMyrX6BmM4ugheTqJvWCmhScziNoAWNdpZm5krhREPkDzCdxSUG78vs",
  "key32": "4NDcKXCV3TiqD5XtmUPSh8RcLMi5fanB65bX5Sz3cHoEMnQ9yiN8E4NpqKnF2YkSBDYXEvGb4FfoyVSCKnizpn6T",
  "key33": "272EfNVStEwvN5eQFDr1zvhcLr7BUXFyBn191oPcAkP49tnUmfqHmyLDJUsT89PyWuovEuh7xcUSVVPR7aWCjBZc",
  "key34": "4SYELwj3bA94x2mq813PxSqrJ7WNa81bdoz2BwcR7kf9wpvC2zahqBUbrbfJkWBxoUkZ4nEAAhkjfWWG6uSgsPEx",
  "key35": "4XgsxihvjGcwUj1M8rJxsaUgLqvBQHrxuQDeYn7iBxk64Xnd98Aer2JKUwnvgzS43GNHExZ3s46mqShpQ2LRvuqH",
  "key36": "4NJWFFXe7UsVq5WfkoGgb8wLSvNDw7oTpYRyWUiAyPBNzYizjpqigJ6kvQ9z8TjL8uPSk1MMK1cz1z3At5AzBLQ8",
  "key37": "5nFgUQtTT2nsPAtQVvmhezcTVQvo3RbmMYSnxnpoxELN3HsmdFDYG3zAjBsfGCzHwMvEK5HFuFKsbjHNKUmGdLxz",
  "key38": "bk97X7mVeSghabiLX4V3Ut8mDMubwgoyegLKQmEFy2rdBLpH4qzcHsoHphTVxcR6DrjPvet8uVX62VzfDfATv9E",
  "key39": "jWiD3eSHbanCLucHgLvY7SToUCfSGEp4Tk6Gn2svVRAzPS1592doE6u9RZMz2wcbCEuGsycYaBzP6F7Y9GNJsDX",
  "key40": "2fZc3y3b5wQMqfnVZuMUThQkCiqfNzYN7AAz6KQYHW3hrgUJpHj3HddB9g6XrVFBBWLV6eAf833xHW7Aa22j3tud",
  "key41": "4Ww3fWtRYuviUWx2NApXJq2pN2P4cX4rTkSd2BEbyZ2aXKSvFur2yaYLtvQvqXDkbpkZzEqWNn1BcPFZvYRvWeaz",
  "key42": "5575Mig69cuJL2FnqPmPM8EnADwV35EBjLYMNK8z2CM24FZuKfPvmotpNkHqusgQMYmr9qiquN4SMGEKsa6Mbkf4",
  "key43": "45nZAGqSgcBjU5PfTwwQyyp4kfvjMmtapaV5bn1Vv42TWb2bSjXrZSAxbjM4WV8JmVjxCUyXPGTNUx1PbBY8r7G9",
  "key44": "3SU7Vpyt3XEvP2bokEvBJi7hvRapSBXtKTenBxMXxtNujww1w3ABiGxgbscFwvT1bhhfsuk9z2ZzEKX8i1Bbisr4",
  "key45": "2YdUprJZtY9c5TezPBDoD7ed5GJBFSzNDscapymC4vr4fW872QDGeNXWFh9zAwtbGBngbrgQu9CYBaDjwQzR7dtZ"
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
