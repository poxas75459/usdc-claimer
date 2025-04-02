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
    "2x5xxr2aKmvLWuKtGUwWgsjoUck4FiBiNdBS3qSynifAbBQyMs2JDeuvp2GKbjjqp4ZUQAZFmZBchQQYTiEni8XR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mJGAjA8jge8xUx7VmKdN25H5k2spDznBtaVrWYyDLWU5rdptDDsTyQWBiomnLEEhaUbyCZDYpHeJARJ3uHtvtyk",
  "key1": "DRftcdbxqNBn1qXCKoGAFEyvqHm5xRR99fFiiy2sRs38kjhiihZ86wg89V55Vj28WjGgUw2WqZje91JZEBUbdrJ",
  "key2": "GQFkcVUNSmVGzXGcJJUuHMh252tccnTLWngEzb8qpouaPfkoUDi9w2c1dgCRpsGZ7NF9EdExB7Sz8ac2nkKzpeu",
  "key3": "4MMtR85XEFZMEze4Eh6pLVNZo2n3uKpxxGXo1eAcUcnSKiB2Dxu3T11eWkM49RAfGgReCCbNMRQfTYFe9TD6N4RE",
  "key4": "2cKvfjzQtoNYD4EHitupKsccsjbkJNAeYqNefiKYTatgM3jB9jAiQQCHenyAjERnBvBfcGRLcyZeDQ98VL8GsBor",
  "key5": "4komwfuLZ5ABVmkP4TheBxHYB3f7QMXavzEivp7Zdqd77NKYErdAdnuDPVnQBDvZAAjNTpMpGYQ58uTgcGCgRekU",
  "key6": "46hcUtFMjSJ1pgazKGscRagFruFmT4UXsSP7Q74LsKJaCnGAYk7pBFx7AVU4K7MXVK6sAQPb2fZPERJzCZeSD9f6",
  "key7": "2BWUvVSDrf7hnNTUBHGX6rX3KzimtKVKnxPbfQZPVofjYnP3RQAVYpibpv9SVFncnat2VXnuJVYbzYNoNFGyWwTa",
  "key8": "2CnL92cRFxf1TyWKJmvGLjQcjn8XHj7Zi6xMVukwBjUhFYya2LoQoNekHPVePQCCFAS49HcSJyNmA2eixDduWued",
  "key9": "563xu97GtzBGnequMzTGMCEvwj59hhveyGRhFTh4tRFMgLvo2DwjYahtZ2WhGfojnvb8yxAvygVQ2dbfNNF2Vm5B",
  "key10": "2NTAc2RTU6qegU4mrNbGsr8J9ouxZXxt1H77UL2Jdh54YBsfBvZ2afENZB5qUexoicgdkBEQieaRF951P2oychG",
  "key11": "4mLzd2ijwfBLK3aqAbqkfWg6FJcDrx44vC3ud4gTWF5Wp7gpvbA8eRaPftCcPbeK774HkPXbrXy8RvXFRD9e5tLR",
  "key12": "4mpcLeYUhjju5eDfifKp9mbfvb9wLCyKux7LeLcFivuayvuBJUK6FywuWTVnrwq3n5zN4D2hXDbxgbB9Vk8orr5V",
  "key13": "2vJRm4muNeNP7NeD2g8GVT5DGcsJnc2kxwg9YDuBPAs5SBkRiWLiUxEK2xuMVZJFHfXcyzqXQSapevqoxPgnic6X",
  "key14": "3Y2pc1r4uZctz4BJcxrCVFwRHukHkufB5feMKvE1ocrTWUuKBTgMCHTRTyy77QVSWwL7U2bZKsbZRyvf3UAeyijg",
  "key15": "3tY43JUs6qLPz5hadw3Uw4GQSkchkHRPVSnsqgQeLjpnKy4pi1gvEfNrMC5NGbysdpaWiJUdFvSx3fMkYD1z2ZTM",
  "key16": "tarNKYkpM4dHoTCvCTy64z66kbuGzrNq1mDCUyH96CxCBQkxBa8uSt2xY3azmUZQEjdsJREYWEMVTthwSM3HVj4",
  "key17": "5ENwWX8wFj9Sq6LEtUDvMwaAofWv6Q3o6k4FyMrnyUi3SBAwsHbkin8SAukaukeS7JYhkQVJuXgy7vbF6dQfB7kB",
  "key18": "3Pp9N4RDE3YsobMsQTMH1NhH13e9YWdQPHQ4LoTZtdXUnpaKZocSU8hr3zDAZtpCLfjg1CbxtP4JSE9ef3qi7LmR",
  "key19": "2KKKkpKgvCkfqRDHE4JkV116uC4H9DwrF4LX358mErfWiYdSPC5ZtQFX51dsLvhbbwAendu7YW4LfKudpfUPpDHZ",
  "key20": "3BgKLtbuXRNQHNg9DJSuTtnCojXu5oHsYfp2qaBxHY5XehuFnT5Rfsoz77v767uzfpYRictKsfGzJ84Ppjr8L8gG",
  "key21": "3MZDAwVRoUq82WfzpZ25e67njHckjCy3zXAFzreuwfk9QiUfZAmeyfKF3bxhcwLRy8PobZqwZxznWEHqLzxc31Kr",
  "key22": "37WZVA5xZ117e3u8ZK2W4F4X6PpUk3iFYHu8ngM1hbNvRUJdRoLPHtBjDNZn8wvppnqBwRaX1XREvjyR4EmWmSp",
  "key23": "5jJtfTQmNr3CNhRi7RjcWZRXSrAoM216ctWH1YsZJkmykDScghDHRpXS5xqSoNb3qAGLoCYPW75s9jL2YWVu1TSD",
  "key24": "39jFRbV2vzi9yLMknR18xgynskn56xc5Vb9JPhD3UjGtE6rayELwFvkTfhZzh8zF9MUPEGFZJHdDj7wR1vL2t3rA",
  "key25": "2ZFdABe55a6eYW2aBMn9qAhot3kgozAMFYBx277CQmpeW6rZA1D7GDyfkbkircjSkoAy6ZdMCDH8ifxE3ktsSUSy",
  "key26": "3Vg6aK88wqYYQpbAfZCVMsoVrt8ke7CeDJrZnHzfFhucS9P4NGpbyqVAyRJYghUsdgVspoo81MPJy2TiNcxXtqqQ",
  "key27": "3Wt2fubgWoeTxEbMoXZqTZ9gVXQZmuCh71o95hapcjhLiNPvp7vJmYBdV9r477gNAkHouxfzRNryMgftSfysyBa9",
  "key28": "3hGpLWCZCs6H8MzLbbgf1RjBimFRvZUPzKbAtBHTWWcb7dexNNqEVUosUGeSjiHugLcRYFtyD5Cwwju9bK31mKiB"
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
