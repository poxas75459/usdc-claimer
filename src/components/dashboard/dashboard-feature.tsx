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
    "5sG37LiBzg4ieWjf4NBBM94NmtxtWARe2uxRZZkn89zvYiC9UzBtbD6jWzrZx5aiFVFz9xGpCTAsT9JHM4hweh31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ry2KYRvomnzfTKNaXvum5rp4TTA5mn9MuK5Epu5VhCgakcxkmUAje5RfsoUahVR9WByxBXjL46SpjZZM8fq1iPT",
  "key1": "cwqecc1eKnnGseMG9a1HjytFwhXaN7QWN5hCx4KrgeWPvxMWXXFpEUjoz44xG7Le1EKNB5sgjsSKsF5sQier1av",
  "key2": "gkqfAG3DNBfh4xPfJLmv6DqbEp1oqacJfXbxBCaeiL5ZMoBz9oFXzRJ6jfS3QxdP1fzYvBdHngiFhTT9mR6q88S",
  "key3": "oKeYTo22qCbKVWzGP8Yt5RjAF37uvUDT6xjtnSr1uY7dLLRYsWQgcqcdvu1t7ZTKUJkYaq32PeK8xrQLLwGZ2fW",
  "key4": "3tpeprjufLzoCjxdcmxQL7cV6vGFtTDUNYhoCGdrYResdkiUpF7EnxcsXAkF26pWzGc2xi2E86HSLggSHtTZT7sc",
  "key5": "nQejBnpsWMe9yCqFrG4MbnyCvrzoqaWvPKE6vnJbkvuZ4nfaj8VM2omZinwkn5fARP8cVzHYPDAmXh1Nh6BLbgE",
  "key6": "5426Sf27bAUSXVZqg9v3CUtcgAKtNFEfmsafkjqbQrts9U11NH8TwHho3jutt552zCzxe7KixahhHoyyPx75NYDt",
  "key7": "67N1FR738mzQ5zTHc37bce6Pzdy6GnpBJ5NBChZWQ1DxWQcHTbmerXCgRDRAaXvJfsyCQFVYRQqV5LCJTc5tK2DJ",
  "key8": "ki3hASpNUaEnNQN6aGazoSKZWZ7rfVmaiALgW14ZGNoHAWv9eeWFrPhtx66nouf9neWXoeJobb9R1J5poNgqWf1",
  "key9": "4npetnGur7Byt4q8hQjJGUuhALS3u8zswJutHZtJ29Y6Cr13rdR535Xndj6CcqDJy87CNLedmMPWViv9MnnJs7TP",
  "key10": "3ciNMSR8bWpuseMTu9NsxN8Rgq8svc8FZroGEGPUVhnLBDpbVYQLQk2zV3RTwhsrmyubQ2EUiB2bB4eRsnPbHtVJ",
  "key11": "4VL4qysf5vJjA6X5WEw2Nx2VyvVdZrtQkrNtGxHXzjAH8FLSaevVD6sffnp7gvMDMCLqdghWxq87kpd6LDd7bySK",
  "key12": "47NLiDpqThCQfmy1Pfwi8RxLieqSXbXgcRWjgymBLFKGNvmcnuhMrZzh92ceG9ncDiG1j4UGMzuFq6WBZrMe5NSf",
  "key13": "61jnUyrRfRL9ibgmey1u5zX6SduaqRLEgaXcsQnU2aunYjXaW3U47zxVEQvXBPZdGetCy2Bmcz9fKYSNQYZvWGqV",
  "key14": "h6rFRCoEFhVvNsFTZAbD8ryv4eAkxRDRRJzg3VsXbH7ErAhiGQR3946VTw3oTBGKkJJTXD5Vj9SdwqV4oTb6ZBz",
  "key15": "5mpkfuRzWNsAqSNH9z3EGXrib66FRC8GvH1DxMDRXuSXuMNbMTn2uJ435Ek1i1SoZmtrRfVdZMt4KALD4GmRaHqY",
  "key16": "9wRSvkXjotvy7yhq5iTVHT3rWJaEm3CWX7euYiRdbFNhoQJ1ag8PB3nywkc1DQKnF3CPhJq9FAMsB2Pmg3TqPym",
  "key17": "4SSzpM4Vy51PdUtPze8THmAfE8biG1khoeQ5RPi8unktCfSVTX3o7WHyiCB1yLvBPpDSVzR34J8Pe1iC4HnwNxiX",
  "key18": "2zdmVRWwz1Lh883xmo9Mz7j86FeqtbJvSpCxGByuTrWh9afPRQFdFyYHUkNtG3SaYUjdwgzwbBmXeosPNCogYv3X",
  "key19": "3AM4S1HAGnyMcnetAytFuF9Nr9pArin3kLAb3pctkUZz8WkYsC626wUouaW1uh4E6Pp64q8p9aXjVkzFkg8ed7L7",
  "key20": "4tuEUtBaAz9gVKWCDEqgVcskATsvnrHUeLRf9qyXvQmojoXUqnE1Mj7GvmXST8anrRUjRGVENardrz3CKZg9ofNY",
  "key21": "ME5uSaKZTmLzdrBwV6NeQBKwaqacagDhECA9R3vDuDbGajVZxr5zHZiKzmgbuwCFoSvHkk4wB1r8LoatoLWi2cv",
  "key22": "vE9oJFgdkL4jMGYDXGKEuFTk4cpftQktpN5hoJ5VLLLM2d1ySfun6qUEoozhjZq8SiJAYgsisoWbh8ufZZYYW7D",
  "key23": "4GGM4csiVzFHxzzYNfBTcMhQ7emvExidKjqp1mUYeQWNkjpyuopvWW6tz5vVBvTDGMTcEaabPiLLXiKZbNaq5Nd8",
  "key24": "2mtcL5HFCzr8xE3kQjjmozj8CDswXMBE9frTuuJFbAvRoFxBU7kipMhqPL8WEqYsjmXCeYQY933siHVYNoLCNPVt",
  "key25": "4CLYLTv2wi4Hi8Gnu9jQbKrCX4oT57AKhtHYSioHfjvqJcMHnV3cZVVBPHSU2Toxz1Rjkt3BWGqWNmCQLVUDk6hs",
  "key26": "Ayc7Ms676NfUiDNKGdpDFfoVV4Dxnj8UajqruU4pU7sUciFmSrkChzrwndh94DWygK2VYKdRRCs21xcvagCXHZ2"
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
