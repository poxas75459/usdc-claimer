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
    "3K6sGKkh5kgDPZ6u9hwWATBe8HNWioN8ipszUq7BXRTavcLq9FYQ2PgDzVKFQNovtk47wVnMoyTehwxKrLvVNchU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aT9rJArSZMT6SgwKJYjyDJSMcYPocRDk1QGm4MGtztBM1WfBMuf3PBDsoUogBGphMmZfzA6tQxJPGcrw8LZDcsm",
  "key1": "4EMgie42hF5KxwZTt5XWqfddSEav4Udyc9hKyGJjCdumQ1F2EEUeLzaua2jW8o6uoeuawDRTtGUXzGByTe9SwPdz",
  "key2": "4soxaRBxiKbfhe2Azu4vQfDXFkDUg5QU26ujx5KrHkMZikqZWoKUagfqqVweZeMhivZzEwoDGYQFcrRKS6izuGjR",
  "key3": "xDhBn86RaLRzxejaLU5dNyzx7z7MC32rMd6LvQ1bYvsk89Xr3dHEYFn7hEzbx5cEYzdcNCJ4W4yAVFMtjSV3VUC",
  "key4": "3VPoJXt9uNHWuJ3yAUExkTp5wjYBnBsSjqN21BwwgfWh3qgVJNZTeeQ3JWktNZMQormg3M2y77LBW3mSCPgr7rg7",
  "key5": "3e2cGM5sqh1grFYpPvCJNzSFBwU1wnxkjMpHZwPqJMXkXWyog7P1WGE1hoBoBgtgEiBuCDTECKGW112fznAgYHSM",
  "key6": "tLKtrCqut1e6AdekhKh24xtUd7K1qexnVQ3iSQD6bJPxUQZqRpJxNd6Tsh7ZmrqeZrQVGYxxMWA2mHkosKfRwLX",
  "key7": "4wUMs1fZX1wRZMPNH4hdWptNh8tnsw9xK2BsDJMvqPXvAid1ZoaW8XZejEo417oRJvoBH47kx2Aqzj855ZAu4iKc",
  "key8": "33V8v4LWsG5ska9taLnvrEX78KTZrMD36X3BBsSQMnjgCyBJVFCGQC8H4EgqniypkZoFhcKLMxM89Seyc77dWHoJ",
  "key9": "2Tj1nBkHQRimo26vvtJ8jS4YCePUgdAsFMECjfzRiTFJDPknRbpxiQtuvN9DGNB6dRSuP7UXTpQHD7QKA5xXuE8G",
  "key10": "5DwB9AH1766fY2i7HY6cvgDatoZU46sjZrzop7qvtCzViNA96rAC3pZ4Cq1mth9mopmYieM4gRU5mHH9VZQhjzAc",
  "key11": "5APRdgZsyoVvyrir7xjHeEA8m6dKB9FuLXStvHABSTQMxVTCsKddhN4H8KdsY7ktVNSuMWUXS9dFd2Y8pciLhCxq",
  "key12": "2UAHbKaYgWDXwTr7Cy8spGWe9KCsPUU3CjVhgszeyLeU3Yf9VsrT9LfAE47nkA5PZN1XxfuM6o3LydzWkJ3t1tqJ",
  "key13": "3YZyLqhCPtZdaw2F77JqwGq9ibG1PM1oFUu7BboYLTAyVj94dQosCQLAiXY8TaNf3No2LTYLRtmo6q2Qjr7TrPbY",
  "key14": "5M2NQmguuW8jRM4Fr8DRBcsQTkk8pc2JuJtawiCP1NWnkArP4ZkF1EHmBpgiVZxnrBFebmgjv5y8gsfM6HXcspZx",
  "key15": "5qpo1bqdzsQ5KTKY9C12v8Rasr4yvnMazj1CPxtPjJGknJZyYzb3KcZ9CUCQ35RetPjDoTGMBuKBSCYvF5aSH2gY",
  "key16": "fa4P8P8LM61yjFDDtPhjSrjYMqTGrT12Jy7xLRC5adVPt4pUZgiizyocduyXf8jjMexN3cC3PmaFt8ixDwPRh91",
  "key17": "2hmYAbT5LYerwr4L7gWU1cTdGfpqGmQEcVJVEtVGmois8h5xFMFm4Q3eL7Xwmj4BHiQSwWBJd3gYqH8Mtfrxid6N",
  "key18": "wowApBeWVeBVvD6hva6hbf1TUWm1nMwyV8LKKUTq41ge8B53Fegu3492WduVMvUw2pG6E4LE3jTv7V58p4H7WQZ",
  "key19": "4qE5PGQQmhiKoqrMVvnwgCRLKAhDY1hVvqhk45QJV4t6cbuH5Yr7sKf25PXYHgkZkY86CNtGieveEHxGZ9sg6fpt",
  "key20": "4oj7ViSDeTrWchSkNW1mkrXu8nhF8X6SudQ3nYXw9hD5KPYuHQfzaBkxTz2cbHhqg14yodZhWuRWsDJhxj4FuKP1",
  "key21": "f9PNPXi49UxxRe8UgbDnnaLhh5Sc3BXeZT1W3K7w4wzoaYBWLrCicJHVn53WPPfD8GPio98yEwqZdkCep1ZhoYr",
  "key22": "4Er1E8v3KiUPRCaramJxMAEm5AAPRSBUkHRSV1zSgHzHzn84UM85eZ8u4NGrFGYAEPRMCgzBWfxYVjKNuZxzFKZW",
  "key23": "5Qsge34AfTgjHUonKLNari2TDDpAz1HUrMHjaHLBWY1obBoKFLZumFH6tT5UmMguGQRTBZ7iT24v3rbxyJEzhASm",
  "key24": "4Fdyex8xjWw6nQPDcQPWf4S3TKmUPf9GHhUGwLTTnGUHVkZ2Skt8AyDoQiU8qtdRmzhEnALvDG76VeK3dAD6sZ92",
  "key25": "mPx2o2a7m5oniRqC3MQuXDU1n75tYqnftvqa1kyfMY7J15aZsYEWWMz1bwq21zSixVX5m8hk21dCie3Y21BBwtb",
  "key26": "4uiKDs9QkZH2TUPy3ZkE8LCyubEpcwX5P85D2kQ7VZQboxx2y9RNfDKeosuTZa4LGhyGkdSeXXR9qkgnAN9tGkva",
  "key27": "3FWkXJCBUE75qvzqpJ4dBweSzYWsqguwQVHCuAeyzoUVqxikd1EaG8uD6udu5dss1GHRQzWrCf2WHHApoAxRvQab",
  "key28": "DMCULW1DByMDnJZWYUX9WQB5jX76gUKFNsCK6ZTriMZtjygNsKFH9A16iiBSTJK9TgAq4VuFw1a2xepoFb6z8vN",
  "key29": "2XecafAU3mv4rdKPYApoBDtnrpk46owfoLzdUMxGubvqmCvWiNTk1QPSjSxkH7S7d75AfeH5AHuSig8hnTB3UKHy",
  "key30": "2cCYb1BRRtneFNFvgsFmefTAgkKUxW54wzNR6dn1UZgT3UWAfshxcR6dWnYeHnJRksnvcGzk5zQ61ZjVsHs5L8Py",
  "key31": "4k3nDe9imH2uvSKwrcXDnFEFNxWurrJoMKjNGT1Wp85wDnYQQsTmviCCd6RmSsZkjETK8M3EoHe7dLDs2UmBh4y9",
  "key32": "61kjgfnAapAg2Mm883bx3j6zutjRjQffaT2Ea2NyDhYXHK1uTGo92SwM5cybeCcZ2J69djX3Vt31dkLnLBomrYmR",
  "key33": "3tWCsDjqqHyTsTZx6DMeff1QBEfMKZqWSJmZMvXVRZ5GuLEZ6dWyVPotGibJa7YGoUo1NXykQXhAJjrAFacR52H3",
  "key34": "pXWseBe62mUSKaaG8uPASj4j4kLrDhfCNRL6kGDF2tRFsLRF7MsNYMMbgPzTdQTUDT6aXPrujtTY7CfjLt2oHJf",
  "key35": "4i69BTVYWnTP5rJTnQLk9AXVY65bgPoQB3325fgcT5ckFfgXkQT82Sp6Z4VX3pwJV85Dx2B8vRxMAqbBuioBpy4X",
  "key36": "5d7R1LtmLgtX55xp1z3WDKnWSWQBsexsR3Lctw7zVkFQcLWAk49v4jTwWQr1rSjvyqiPosp2EMw66wYvdNZPqRwn",
  "key37": "3ywMZakDsHkZ1BtbYvqZ34tqXbdFG4KST8ZpcJwrBo1spLnLMhEypBd3u2DYYChnyGZ9rFGNCKnFY25LJ7vEfw46",
  "key38": "fisPmpAcsyMhNGacFXB7k1UBUJWWvDrC5SpiQGDNzZg1MDpMr4MLFqHhkN4AKVJLq8AWSXri2LhCNYPEWcCzY1f",
  "key39": "3TYfsPshL8oRAxxTE72eu7RbJpcAQWyrpmdNpCjPFVwvnaXAk5RZCwB2uteMiUcTr4CZnwwar8XR9Jdw4KBBriWG",
  "key40": "4N9iX718dwqkpmbgYKixQKVZSCE2FsCasQ4ZM8ttiSxT8oi6Fcf1bgBDWVLvktjwsqvhBRJ6CQTzzCMjbC6eR9sf",
  "key41": "5nsGWctdNK1yPTq1bbf5jsv79CMVnD8byFdy3sJKuF8nyL6oAf7A33ufePayVNDB6DLvngnV4r3axEHGYuoTqWGp",
  "key42": "4ZPs9A9RsomstXo7NTNjRjURjJduZPbqxnkPiuMDGiSsE21RdojWGWeegd5goc9nvvj7NY9kNgUWAvZSxXh3uwbK",
  "key43": "3VoZbo1xsMkeEdqqneJq7WsEuCUJmG6XGv4wbzbM7ES2CHpT8hLfPznDGYVcptr1ZidAP7fr9EapEPuiQQdmkU2f",
  "key44": "h8qSyUyVgYgT9k1rZeLpB31bRRqsLqR1VyEW8BQJjdVQcpQ4eXpnYWtttSsHbezcZTrepNh3wniLPDv4ig59KUM"
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
