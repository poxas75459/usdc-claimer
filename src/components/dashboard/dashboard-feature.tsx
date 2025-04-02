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
    "2QLJfEYxB1dYjGaUwj4ij68TrLqzJT2cumchXZyvTgcHsFpTcdudYKEFQM47B3pv6o9MNenT2fBF7fQxMCwSF1em"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Jks1o5qUpQBo6FmKzJj7infW5Jn65xuqot5MxD9wdtTNiTLtenk7FkWyGM6qwQ4bM9TqAchZFFPQdmXHN1z1hg",
  "key1": "3J4rCs4pbZSpd9aQuSBzqrpBwTwRePN7RaD8WWenSSj3Gm4Spc94yH8HHVebvyRF2NfANpMvMCtx22iYLXipojw3",
  "key2": "2Bpr9J4X4CHYkFP2CSYj2pG3kHwtnravPmCVF7rFjVBv9QE4xn9CSX8d4NWRAdYvwVUxqsi8cAegpC433L49fRZZ",
  "key3": "c35669VLVXc2yHcTxWKzx2LQJ1HcDueDT5r5ggRo1viZ9ErKTXcDsREXMtiKNpWW8Txq9t5CeNd19bp9beNnocQ",
  "key4": "1Hg68LLS8ujvzrbJrsYD6YktkkF4MWvpcghbKaVFmssnaMwkV4qtLFnuRJZGxAgKK1b6RnT3xvFXrnCHuUSKsap",
  "key5": "3K1kks5MfSTkppFKZDPPQTnw8DyeByKfJHJvCFgYY82t2dwErzxTW3QuGQn6PrsDMV6NCtJgGcH3dgnLfwmAPKEB",
  "key6": "2vRk47UtpHakLk7SWRrFs76aFQXjZSDpbiFHZkudTuAYVAZFzrTiRNqY2GqU7XA1mtpYy4KBTBtEogoBE9E238NK",
  "key7": "2hEmpGvmz3YiZkbrHk1DuoZpEpUXBx3V1mJTyf4Ec3goJ7uM9fBRs3xRtFF5W2VfcdmAtDPH12W5iFsHXGGBZYKA",
  "key8": "5mto14Yeu8nnoRiUizWUn65SBgjqVpDNQcTAQf74CwSyRgRuFQ1DHsw9i128SgTSCLBEkQ49F3KJUgQwzQ85rtis",
  "key9": "heHpUh93Sqhnr5AibNrc7gecQUjSR34Q7eTXYX1dR3zhJ5DaiDphJonkEWJ3GynZR3oXQxjZaLNbCnJHhTRWurh",
  "key10": "57zGq3kRYfa2feCHXH1tPES6KwJnJCxRkapZ7fsUu93u5XQrBYvW1JVWQCrtR3DBUZXw9JPeRaJYTJWPo5m4BML2",
  "key11": "4vUn9WWTAvdgQdxDgVFyZY4VTMDQbRGV7B7kgNszxo6f17amCsewZNdRoxMsfB64k9KQts2L4WF5qKN1mB6a9gXb",
  "key12": "2jHKeaf5ouWMxhSbzcvjvWNfQ34ZcBpuwUEL8dZGAsznE6x2mSjfv8YDFFcxjxd3x8rwtDPif6eXmuqGCmsxCbFB",
  "key13": "4hshPQ8zAihMRXzF4UnNCpfPSbo1A66bnATJd7B1LfZusyCV14ixhivcLNu3LMBgwPjjQES36ZgxzFdeECPxUrNM",
  "key14": "5Fq3XwkLYzN75EFEcykonMtMaE6omFFQryLiM5eYuRM6jPUUAwDNdHEyJstKy8ofjfmBdYTpPxHtJjDeErbY3Su7",
  "key15": "5YYkJJfD8K6xEAPSUSn7KhfFcxZv7nr92ht26UwQoXuHbiyFWSshSWk8QycsyGLHNPfpMQqr58sVQ4Ey46CrdND8",
  "key16": "29p7c5fvJEqodes3vqKdhhzkYEdVWQZhNc65BtbfZvu1zihnZz1YE57n8ng2eh3auH1dqccojKUBRwMpLAdiy9qt",
  "key17": "3CHXk4ptgvBPirgDuvhZWnFEZhJJgqKqHXGbkxB5ncgSyRmWN6MNLfr4CDSR8jU3pref3y43k1zSRacmEgqmaBej",
  "key18": "5T8vsEQ1i7NLP6hNs3zFiyMG6fRSJECpkYWy71Tbi5U57pa7TgZMqvQinULsz3SXpzNqhxZMeN1GPURqQ1XgNhKB",
  "key19": "3zBn4FM4hmLFrhXRhE85SSfpGPEJau45RtWQ8hxXDbAQ93EFb7dvpZhSpBwvqADmjKD4TqqeNprN6WnqCnbtGb1R",
  "key20": "4uHRpcqtvHE4prEYxEQDTf7kcdUmiWsh9gDknBsoyeJr46frg4ei7HrNCQk7yQyJ5ixYtK3mCb2LXnXUpL2Bgo1U",
  "key21": "3g5sh3zqZVPdTN8yH7bc4C1psyakvWxWxLRsEZHb3ANz3WfgYFtBqSnmn62aD6J8PiQMd6cCfdrgE14HeubbEvYt",
  "key22": "5ifSJcRXLbHDrJ6PGkd9iRG6h8VT2P9hUh2DdNUsPAg5Gz9kfbvpCWpaqAEohvZd1kiN6UkCmM28EDdNFkCk8j5f",
  "key23": "sMZ757z8318HeMv9EDtoRrARnMwVsXoaarzbyfBxNmukdWcDmVfeY4U8a4dwpxPr3ytx3zb8utDdWr8y1NL5XtM",
  "key24": "3R4WaAeEoq9HECL5Y2REXe1vyqtLzdTt5jFPgjJ8VdocYRazixapbS5s6F1Ahv9xydciWmR5miNmcW89pUseziht",
  "key25": "3bCX81tEJtjFEB8zqhJjVNU49HgzVBgrWD3bbyJj4VL5f1LBFE4fJeSx1ZgAVfU3tSHLD5c2cmpnkYatyn4GxwQH",
  "key26": "15wjtSvr2m89g6Nn9KCnDJis2h5bbLAH4cKeSqQi6ptFrp1FzCvg77etGMkSEv6ut2QmXjzR5edoqN8mxbHMVDA",
  "key27": "2kHGSi9YzUEo34uUrKDXV49UJKpMNmP6fdjJsDEMcxhrf2iqXsjaUMokzRaor3gVEL8hXNN5MDGxAzs9SHnveHVR",
  "key28": "3PUcfqM9M1VytpgQbH9hS2FvLaqqvC3cyUcoPPbCe68ohfRvz5tSEGi89QrE64hKeUQHh6adSSALb1pg7CxZYmaH",
  "key29": "3fPU23iinSbYKJ11BWyNp7Q8smbFXYsik4Dw9QN7YBb9PFEpaMjdXjarvoVd6E1ay8c58h5o7ERs6rk2Bv5j9WTX",
  "key30": "5jTqqwnosH6rzYTJa9YDusnVwmnaMYmw9hbeuDc8Q6P5BWps4hRKcdpWtjJygurBKVHvuSfhn42c5p6aKj7dCigJ"
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
