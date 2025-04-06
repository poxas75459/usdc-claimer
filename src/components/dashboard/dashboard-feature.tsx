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
    "RjjHuHotGw1hN2oTR4vnjssPmCapfSaWY53ZLQrDh2ZMvP9AUfReJcBPb8YWWMsXuqhUygMTtrqZPjZNPTxQDdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GGP3AfHdxBB6Qe1zRDsYqwdx9yC6BkY7jXsLf1X89oAYZjkazeMvWfECLBEsk3XksRxForMaHD8kaK9VPWYpGa5",
  "key1": "3knvRPVSQSDQXfpEVCJDXji8DhotAjPjbtJHbx879BzB6ARv8ph8biNgkV4WeNFYS33ZWBH3AeKT345YXFDnJp2r",
  "key2": "4rt6GJi5cpYhoVVLCH1EU4FZLnW74qwpoQ6WAFVGZMkvxT8fQL7tWNGUGcDxoDTDmLfFfTGffMyDbDuPDWZ1xwP6",
  "key3": "24Ro4qFERqVtrKxXojXW4pTpZWhvLFPUuTn9xuefDTd9rkzwY6eZxhbnjLfpXPsP6GMrcwGCt5YeXNcMSTVa9R4D",
  "key4": "ZcjoM3v4eJtRF8achRCVLCvsbftfP7EYuCS7mXGVUVM2oUZ6S2kgvR8jU4FHjk8vfx8WiuN7r6M1c5zmMWDv7z7",
  "key5": "5h8BtBwGgrEWc3c6CXBrxYY1PtkGwUHoEAos16Qj7crFspYpgURFebHspbmZJNPj614nTwWrbvvEJyrAbTbQmGWL",
  "key6": "4tXBRMhHSu6jBKm9UAyxdNvmZ1EE9tPg3ZDKnEwbMezBfhJJh2t6kHZGimoJpwbaUui7HTjUqZfqxrTMfdYyxZ6E",
  "key7": "UxVJxPB1HLvmCRQqiE83heQN49uDa6YL4YUi7jv616qzaZn25UY8iTxNgduLfqQNW2oLQwKCjegJCkHK6BkRsqz",
  "key8": "2kWv4kbZQWjfNVc8Gb26euGJ26Ch7SoEMJiB5jRH6T9T5rmuMFrFmhn96hWeFL5Rn3QTJqqpBqnLTexZs5kuqb38",
  "key9": "5GM1cDWi3GciMDBDaEPXJpTLSNFB45a11SBb62j1KQrF4uHUrezBQ4vL8fVA6DBcqPSGEpDFAgXbVNimu8zMaMJT",
  "key10": "48DLuo1MLs6Ctpg6Sv7EWxeQLtZZUpbGyMfu3X8XpGmBGJX86EagJT2aGkkyyhNrxcJbqn6a9X6SmQht2nbK16sb",
  "key11": "46Z2Ntz8B1Ch38MtsHZmLf1rNjVcFkY2F6YjzAZVAcojoHhCGq44CTg338SePke4HwHqbXYEn9FNp9EDJuAxG6kt",
  "key12": "48TvzatWG1MpzVnk8bxfV5fRjWaQwryy1enCaXzjStD3RQx6PnZR1FmRsKdMoQUN9wsy1jpPYUCGZo8yA7SyPLjw",
  "key13": "67CHzbT5cUQAAbec8h2AWQRSy85d7KjVP6c6ckEfNL3bfMmtxDW1GwJuX6WbtPdTXfAhC2sghLGGQZRu71tLoTdh",
  "key14": "2Jkdveq3ej49Adohmmzp9Mg6SH6jhCRgXiqxtWQ3V4GroS5P1k1zAmfyg9gTLQ93NZEproKRaxjGNkXrLNVH4uXk",
  "key15": "2o8PCdTMS6MtA2eoMWhqGQiyghTPKWtgsXoMonuvBQn1WNEBAKum7Gybt5ExbnbSPg7SC6xvwfnuU9h6sg1beXtB",
  "key16": "woKsZ1zezo9cVP1emEHvBQPYEd6fqQXdSi3AA52ABeqbMn7sr8PF1sWA7RGyuJAvUkTZXG3p5xVMERgPxcCBmtP",
  "key17": "3tkSSzJVQ3vXRjrNcCjwzJ2KaPBbejzwfW9TYsxQDv4RtfFv4i666QXY8kjcAFnFD9EhR2KfNv3GTYLnUDuwdQrG",
  "key18": "5ieEvGb85rGnP2PouJoKeMmvXk1BXFyiEcH6K8aMW6RgaAGEkywFBFsLZYoG4voTL1N4LymtFiYqACYEE6w5PqYZ",
  "key19": "33SULBpdDztKerbffN2xRb2NrYayZ3ygjErmEB6Lji7TDMJQQopFXwiZ4mo7cfCxNDeq2oWGjDems5526NZJKV4A",
  "key20": "4Kuuxzymabo6oACgzwZKPqembw1XbQFDEzjXdLW7gmnXynZwbfW489XKPBeCceESjywJvXSGZmnVmp12UdvosFnk",
  "key21": "2ZxHeuMgK6bapKJrp5ZeULBtdBXKCSYVQYJLa94DbcDoRByTDC9su5X3y4oTtnAMEsCfXSVtp1Riq1GTY2uisZGz",
  "key22": "4BtqqUF2RXCA3dpLhVEg9oz68Ss54Ac3RNepfDrTosytT9Hpc8QCRLGaNWHoAJHpBSrp4MWUFHgSybqbZ3xwVfUC",
  "key23": "3D1uy2yJAsygCdueJFspXrktxw9byfrfSwThH5DntHmH5Mq4p83LF2eYr7HhJK6hcheYhjsTnvEepUib5eW2JFvj",
  "key24": "41a9gdmTXMWvdXez233kC2pHTQvQbVotJHUWHuerFwLHKsciAQrhTYLsCdbEmcmoeiHB2kewHHSSciWcGCUKgosK",
  "key25": "5ET3DntxLETbfxJXZNgmdUeGymYY31cPG6LBhSJHnWuDsNLCJR3YjYGqFCPWYhiN4uEbs4CHq5peCW88g6hk65rc",
  "key26": "23h3R5bW5admdmwaPjDPd4WwivzReADJ6EiP11rXyL6BjX1ADw4Evjqg7EueZNnx4zXKsBByq2rbPAoXrqJN1Wtp"
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
