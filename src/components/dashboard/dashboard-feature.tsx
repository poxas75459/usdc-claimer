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
    "4yyvuDFna8jyWevSptciaS8FSz1rrsfgzBE3WoDXBaz2sgK8rJArCTPMWZGYDiqtUCRzH5CfbgJuymUx5ZYm41Xt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k2zrdrH9oKiAc4JbkJJ4otzCUk7HMkUm4sUxnDJdaLKZTCvSBkxis7Fo5bVU4ThZphicy7pTXMBtHqiyJ6JHsKF",
  "key1": "2ibgrtQVBSUF7jqBGyjQVGexZL1hEpoH8Dj5sAcBa4WXpcioyTK1io2BPXWPimacsCbmYjBH44CsxkaSTk8MBvyY",
  "key2": "4TrKetV6UcSqAVNCwRcLeu2ptMDtMq7kkEAEW7du8gbphFKwEBfF8c847rBACXzJJfvgBFDfFCNpD2dMRXqTvxfr",
  "key3": "vRKQirLgvdMgViZLG4LQd8n6qHsCQxsdjsgN1U11GeETZ8fMNuPhb8xE368EdUywK5vJscakrUWKzmcTdgUzoCw",
  "key4": "2pE7zCJBMTAPf7gs2WPySfVPZfC7fHKDHBzsngt91JrF4wNFTsEtcBSeEEhPjhz6TqVwzVjCWLsKD5HmzMim3SgG",
  "key5": "5nkvAZzH1cHaZS39JMK5BSKPT8ss1ws9boKmz4XvBTPF6VthVtRBn6Ge5emUNfUpjLScxMaJ9mfyhYQHaNueMPqD",
  "key6": "ec5ieYbDAF2ra8Xr7je3SLMFuxXVFPgc1MeH71Qqmp2sxcGDeN21ejXEVhnZ1FR3oPi6RJibqvy6FtskmMrMDqY",
  "key7": "ArVRx26mAEimaP9iafmb2qd2qy5LBYaW7qwyZDFPXjzaqQXSFg1VtcMcqMTKYbKUxBwikRubmz1qDGpBP876Xjy",
  "key8": "2m5jgZnDFoApLxqoHrsfJShtPbh6dxzVRoCrVfPzQdQvaWGQHbxy9cXuTaaE3SeJ1zAvRUhmFr1Mtg77qJwfRw9V",
  "key9": "45bcsyYANZYoiABeV4Psf1t5eEj7V8g25eNycUJebDGxBZ899r75UmBvenuVCHbEiGLpEMGC1iwVkSnJhpGhKhke",
  "key10": "2VCrV6mkaLFvuegrH4QLiCV54Ygj4WLmnsAPT5XeWZjj8jMVxXp7TGzJ8KGw24ej1HYKY5vpZsJkzHhbgGfneByv",
  "key11": "2XSYS3rm2vQxtczJEhqFXAcdJW8xvE6bcqnFeguoNLZd44nLTNXes55f7pv7qHyBnmi1rWe2hrxXjDc8WrLYu7fi",
  "key12": "27RZK9yDHQHwZEd43BNCczGhsBFAbqSw1gRCWe1wf9uRj586LSkvofVrhULjAJVuvUuxDbbBsLca5bUgaFqUQvtQ",
  "key13": "42dvTa32Q7qL1RDpFeWqRRCuRFeLTnUGgTDhWJ2D9rd5idrDahnWbWw5tDDU1tkCy2aP1Ct3QjqmxapepvZN2KS1",
  "key14": "Z9iqs52FwKsQG7Q3Se6V4X8PL7Pr2ZQ52WixeXncW16n4K1f18ubCe1qTa2KQ3gDMo9s9tTKaHvohobiXxPY1tK",
  "key15": "3NFwUi2ubPkDnTDxjLgc7iXuJEdsqDimyntFCX6Hoe8BMz8XdPwg2aSnM462Aqfe3VX28yJzKSp6nsyF5rs9EdLR",
  "key16": "5ugbqg7HB8iMba5zVwgMvXbPHTGJN7AEcc5cWdL47UWJrNuvy65XqH8cpWKvqYT1GhkGyRAgF4TgfAXCakPDrCzm",
  "key17": "5caTcmuqf23Z6DeuEhFpogw3YXYq8bWQTPoX31E87QdTvf6H28CtHT1xFBBToMwAVGkAR3fTWTWDrwVRS9JfsEZT",
  "key18": "5hAW1fHNHKfveMaWrpaqoP82n9rG1G8WoRzKaman2soVdbaSWjzW1ms4t5WPdqSUVekZ9YULbV9Q3LS8Yf9kAG4N",
  "key19": "3AqsEy7VUmvWcF7tCea3WMqMepBCQhd6ci94FDbzrUUVf4BEFQRtMh82sDJQzGB8zGAYfnMUAKxfDg2wWQUXhkRc",
  "key20": "3SQKy6SdUfmupiHmsCrZSTVXRpdCuY3F74TSDZ7S2LAeboipG2DuDh5VrJ8S8sXeWbrFdZrSyajL4K6wEFybT8Xp",
  "key21": "4mHDyRofZtaHi4y9ALPEMSGtyrrLRsxM7JVuZ6Zz1KyffPCwmtm3EieYD2PrSH7mLGivVWjdVCpETJUuwXi1DuVj",
  "key22": "3gY7idRirv3k72jsYCxCAEvG9NFGTPy9y3KePZQwYjmdFYphDMW1PwXGwyvwiDLWM1fvtCEJY8zomHNW3GX1ZEF8",
  "key23": "4B3UMuttV63drvrAhJkwFSsEs8QAKsESrRqxSf628DSojvrfcoahDBPyNYkVm1Jb9U2aqgxsXxAWogL9WEYmtgoS",
  "key24": "66htBF2S9wsgPE21sohru2PmvMrcZM8gqKG2EfcCpoTGBD5LPfY6RLwPGR7fe56p9vvazYfSjsRKNMyaRq5M3fvi",
  "key25": "4euDufJubV67uUrBc3YXxHPqKv2MZpj6AP1AXHPh1TGLyppb7Qe1w22SCGNEN6tZedueFu4hyPg8rFZ7wJxT1Vny",
  "key26": "59r4phRb8ETQr35AJvnTg3T1tYhzojoBDt21zfgUNgZ6CJUpMQ9pK9npx97Xrc6MT3ZT26vR8q4JPVk82xGvbyyK",
  "key27": "4LoFSPxFyGKk3eGFfgrMzK2PTP6jTV6p9MCxBjY6jcXcd62tJkNCkZSt2zc3vYTCV7fhq4pBuvJBvcYCFu74jYKg",
  "key28": "5HAJh8ByiuXPupDDiDEeLNaatkPcZCkccD8g8WmHoXyefTx8KibgCzQMVVoZggTJwm3TBCaTH3wvLHYuHiGgXbvC",
  "key29": "9nCXX5EQfNKJRhzu9iPgE2zZZFcWTxTRQbWjw1eEn34fXeLJp7VZLHheqbSzetyizg5rkVDaQR5DcZAggi5yf6p",
  "key30": "4n4a3rPXoBeddCiP11prQWmBN5kTG29vtqBtmfx9KzvEvQohUbR7iKNtiRGvMQHXVTR5Gmk2tqzTevmL6uNCRf2P",
  "key31": "3QknQvuJ3uFny7NXBeedfMhRBqmkgcNfn2McJzWFmqKcSfg9Lo8RF8V248SkyEeJYExMwSczYHqwCZ43hN5oA1Zm",
  "key32": "2pULfo1eg3WXyvo1T6RHcGYAmYmHNqUDqx4pca5UxGie29HyUgk7nq7PTcT6Jy6PZwBr1VkmmMFBJ5Z8zJrquq9b",
  "key33": "2by5PVXeZTjeBocwp99YwJKJLEyLL8xYdQV9M5fmG4G5opMiEujbdkJgWz3nt1fkGeE8BCLubyH3stJ47CrWkb7T",
  "key34": "4e3tLVQ7DpPmwKKgttcHWuzqrMbEkCuVSdUbnK5goH1SNfHTDHvXB2yY8pEBU32LAbquhEgAiTJdbXvfjPfNxa8B",
  "key35": "2sZ52wYBWD9Yjb5PfcnqoAdzi48Co3SzUsuoPFNteWogK9Fh7w7r8urFMVxt4wn5gRuWKCyiJ2CFoWSbhWb3hLUB",
  "key36": "4pDAviFCnqYngW5fNB56nzpnWkto7QoDFp9gczqmNbzpgsDHMM3ssxgCAXufKzqvcc8z9xkGwKW8Qt6QJwRoHmp4",
  "key37": "3vst1SsDW1LDU7ha9qQtyAoWiBGCEF3qRShC8sGuTMznGBuPhZjUZeVQv9FMDuSwuyMAbayjoMeAAWnJPHEa5nrd",
  "key38": "F9SUc1424t5egEM1ZwsoKHuYtvdkuMFbVv4HJ8vn3W2nULGTVLknoWkVKW7z9q7YLkgqTfnDbc8dnQt96pxSumK",
  "key39": "5HMVeg2Qsgt999n7JhWiw5zXXMUBDBRUXVK1sHc2XAnGaS2cWC8xRrsB65fNsuxZpn4soD3dRS271MemGg7kHuSD",
  "key40": "3BQSSVaL9poZTq4LGAtMHs1zvXLWsKRiz7Fa3B9JWPXnvmL5BU9S57Z3tPRF5b6GgpBLEebfoo5X9wqbjeGoV3nD",
  "key41": "54yXQbXQ7Pm7gNgErVxbJzfc7XdfRYbnvhnNSdFfsgP66ijCPepzquEmE3azLPa8J6G7amNZDBQpxguqXphsgJH7",
  "key42": "4irvBpkTACzv6gCk5uhw8DEvsEHsCzUghv1MDwUtPsqpf5UijWwhfZgiK7VsP23dabLeEZsGbESZoBKEwJVReN93",
  "key43": "dLW7rmhNZUubs1U5BQEkquNx1zTxFDeF1gu963iTWmnL59s4zer24tPVQhQxFFMv4kvrtgcWYPz2oGbxVJBzwp7",
  "key44": "YF7ZrES1nHjeF3ENPYaUyVPPqkwncL4H1d9SWdh2dVSuCif4zu8tCskDpJKtTZSaiA8zYsEVtntoU2By7NPFwq9",
  "key45": "PAJMCFxtrQAurp4ZjF1D8WR8worUTv5xqDt3C3xPfdLghcRWoxkVXzPL6dRf4gpeKNS3ZGLY4bVpyAxscFpp4pF",
  "key46": "3GUoU46HsmsjpgzRZ6ZP1wvX4qboxdLkTYaQthrfiD3mDCc7o2tJ7JKLCjFmNWWDePiJqrscEXN7vx79yfR43S5v",
  "key47": "3hfWZWiTf46tLUoANuZvZLMMrYsjN7bH4TYJimS6kXbLeiSkFApngVZJ2vHLnbkYov5hz1Jg4gjitDtZN8PHh3K1",
  "key48": "4v6R4WdM2oHGuN1n4Mj9HM5i8AKXT7p4drFEVbLqGzFvQjUjyknca4rGhygMvi8oucGjgPquwebYDYU6z6P7fJ3z",
  "key49": "59cA145J9KDJheAP1zgifToJEadW29ioD1AYvUm9gMPFQTpweSi6se2L7sr36Z8zz7cHvCLxQ7BfkgkVZYNMd8iW"
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
