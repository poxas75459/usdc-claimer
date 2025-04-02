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
    "iCTRHkUV1qVdDuMTfJ9PFbAekBenxjChb88PejXzj5qKdwnv6RjRbpaUvfjXEFr7mHVWh8qtF6i7yfgoL9fBkWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62KsxdZEBHUm14WaT3zBP5qZP5RDw53kUvzGMf1sBkpE1oLCyQDGegxuBtJsE6ZXjEpdshggHUdEQoXHPdyu752z",
  "key1": "66R4dLFCrhZ46kyxf2m55AKVabASEFEUrS3vuarPZ9xgddPAYj8noveSQg9iN91GyayRSjcQTtHoL7gscDMWASPX",
  "key2": "3oFaUkX2gA2Gc7ChABUNzehBFi4RSexUqFKDWANhvLDxc9RnkPpY2MUM7WusU8AMmt87b5bBWKNUFs8uMuAD6245",
  "key3": "3YxNqdLdW5WwT317rb1iQAhY1G7QM58q5ZZdGnSWm61Po8fSH19UJ1jrkntXPLWaEpshofxM5UtkfeyfNDqNHR9R",
  "key4": "vLVrQckeoVM5H2TuMCYZRfRR7edKCLAVgXmp4v8QX7dudXbhmRgu9xksBUe486qxK7Cu28qAdYKiwda2nyRmEv4",
  "key5": "5bKqbUWZH1J58HXjUtoEKpDYDZjaf8NHSFiQ31GBuEAWeVKYcuZWCjUe7jY7eMesPtLEU2ongqbUa7Y3GQrNQ2Lr",
  "key6": "2do2cn2inFyvQeGzqzKXnenBjStG2dzsFq4D3bHiuFfbnwMnnUiFuq4Sq2fyFuvNiNDKsVyzZ5keVVsDJoFvifMs",
  "key7": "yb7ciaf8hwHgXm4HmSuXrh2uMQTAWpXMVqVo9DqHch9PRyiAVRP9wHi7jyFMPnziE6uxq6SzL5gmvZNEAcAQuCR",
  "key8": "2P2n7mCr4mEV93eMwKrLarhPLFKNQ8AxyzChjXQ3D6R2jU3dKMjewKtLzJEvdAavt5WbTyZDyWA5KZXgqQZiJ4z1",
  "key9": "2vbeRwH8heUchkjAhdKjd3hUgaM2F7cWziJxia1NNUqGrALqn5D9WHNchuifMBHsmUzTu15vo1TXKFkGVfavzuai",
  "key10": "4Ha9jdhXB2yA1sAp1uTnR4S3KcQ4T7g3zrghvaNUrUUWiz6Tu27SQygAtxiD2L4vDq5mujJNjMsMghBxd9Xa8xHk",
  "key11": "HEaQx3sjmTFJUSgasPERnWDkxm357JF1fezYpY1GiKvKRPVEqWs14JKgQdbiHWXZ64ZhNLZr3LdbpLqMKLS9w8B",
  "key12": "2br2GyjCCw41vAszyiAxXreULMX6xtrWqfN1Yzice2fHtWjTP8jYgxfuLjUNZEaGL9G8DebK58gyB4a2gCXuNinu",
  "key13": "2qB92bJ2af6ZXA8sz4RqX3Cj9ydn4XroZWL9CWmFhe2Up3j1XkB8BjYnuJinS2uiY76XuJEeYuKvV7LsgJpH9yUb",
  "key14": "hNForvSVAhEg1w5v6wbUSQmP3K6XpTAwacLxwSxqU2PZJ6eC1gNFe5EuxwdfewwZQ4RdsfYBV7RZaM58Z6UXTHr",
  "key15": "2wQAf4pJXtX1FLdjiRncZGx5GucJq5jqpNkcuBXJyPNeRVyGTure5xb4Uk5qkqAoXdX9n5NtQvH3kveDUL4L8Sdr",
  "key16": "2dLWi7ezTc1H2zRageutXMGEfobJVamxHhF63GtAAxn6DGgPFEZdUP4qzfG3CB7P33aTKNccNiB6NaUzRmyYX7RV",
  "key17": "sH9FRBaK1WrtADynYJC64KeuFv7qYJ3TuMUy69XPgxpqGt3jhtz6RTZwSBzfhWPm3xhscVdX4CYyBCmi4aATL2J",
  "key18": "614iRAoFydaBX5atzk9LCPt96B3Xv3meTeFkBCQSjKNhnTeZEiFkE3Enqm181eaPF4buezNYgiwVemJhmFvULuhC",
  "key19": "46cLzF9yD314DrpMYtYfc3gLzL1honjA5cnAECNgJUsRUbQyMkW1sCYfHvKWvHKkKApGysFUx4m21jfJS1i5QY24",
  "key20": "4R8K55wDkZNNwqAXY7uTepMSiANqA4k6obZEDXwgeFDSkidrpPN3Ro1oHLFiDt5ozFfvMdCzhgSzTS3tTpz1woNM",
  "key21": "4UbYKJk7VBHyhgPycWyXDtgRcREi3ke8SjMbHTbSuwAs1vn9DuAkuPYMfCHBPW3HPqCaGPPUTKMgf7ByzrY1oZR7",
  "key22": "4eXHhHE5D7ae8CWNAc5B8ioUcG2WyLabSRBCXS5sawHwuTnp5kpLQCPa3tmubeGAHaPTsj3vU8gTB5kY5tE4KYt7",
  "key23": "4T3UGMYEbEuxWtMR4HAgrJgseSjJx2GFyHfT3SvTpCQPNRSMbYrbgY4vuuofmSht7BE2G1rnc1sfzYoAyBf64CGP",
  "key24": "TXwyZSnm8XpCPWHAiZ3jT7R7qYAjgY1pnmj2sgFEEEmvWwzwMpMh1jGddb4pTa8KuxHEupykogABZ6XRKFR1857",
  "key25": "MBNbkWaetqTqJgQZBjiKswtPRcJ43eooTckTRsZ4p76BnoXaB5FDPZvSpe51riLV4HwFZEBr5ydeAjtvVR2XRPA",
  "key26": "5pduQ9zyAUXXnaKFyXRrdMxBDt8wfhWmVrxKMWVQDvRL5QWW8N9fjKyM9pBRLvxUaf3GQTeLgmZ1qr1Hm1wMDmm9",
  "key27": "5BQvLwdP7gGk8JAtUL1pzWea5sPmMvkuBmAaf4FFv2852JuFZ5tJcBU5T8xhH1ZPygfLX87dz7tawUF549oFsfgy",
  "key28": "4Mm3fZkvafn8JfRSBmzQD4ubXeTeVcCj3yhAgCvpirHJTVSXRXpaUoPfptLYpyGmT7E6P69oBbPfZq1yykFNpYDR",
  "key29": "4zeyJkay8BWMfteNQMqPDzWToqBUphn76p7PM5EetXH9MDMsgYGPcNdm4Zdkpqra1gT8orZvkk8qHzjeegZsHBvP",
  "key30": "cYmQ6B5K2bZPbRv1zeGCJWMiGyoEyw9aDFtuenXmfXgujc4dgBtL9nnr9K86e1QfdYPez3yxTvHA5LhmCmorm8d",
  "key31": "4nMKJewmzK57XsJMvzET4vgJCR1tLgTmx44U7vMTNV2nPphxXfGnERvtEpava3cYRmK1eEJZUTmiVWV6NXiMunqm"
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
