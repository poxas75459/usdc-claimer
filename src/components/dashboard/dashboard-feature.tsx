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
    "494U8xziWYpTyFXbphjce43mTwS6X9KQTQ24kehTW4ZeKoqdpM7rhGrYkJBwqcZQJY2jtAXuiWBj51vAHJXA73Vq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Dse9wCmHsQar7ngLqQry2dMU9jSuKfLShaXmbPxaekgYECbcYGKRBf9JDch6KaTaymY3RQtRUT6p789FowVB1m",
  "key1": "5u3TcXyDnTzHZ18JG1tM8VhfNCAtFqdmDU7RxxXck2cPahaoTtVt9orJiVKQ6me8BJbJJ8RTVR6y5xnS6DTtKioD",
  "key2": "xX1f9GP5QCjPwGJtGzcmBGMBB1PdixBQbphEoc7grEZTUDQVdwDBQhcGGKtYV1BJZyZRucMznujtXuU6DREzzX4",
  "key3": "5cMfyP4SPadcj4to6bAgDHWSZk5QCYwtszjUXJdW7WiLURdju7EnPPdJkNuEcNozrWFkxn9CRL4LvQs5MwgffaCP",
  "key4": "3aXLquAhe79pj2Lf5Ln3ytV9u8bw1qHg2V3kw9nMDXPfHkVBRMkQBqyYW1motpc8KUkMkZfwe5eiKLSvmseQbhCV",
  "key5": "5Dat3kBftTerK8LF3rm8CXQWbSkTScr15YxMuREJ9Y9snnKKiLpkhYnmQ7fSb5ykeu72Uwkczjk1a5DiZdyNgmwE",
  "key6": "2VimvPLxUnbwLRhodKD1DPGcu39EQFAwuSy41QpoocKR3P2Eij8yANjDK2raCMJLAhiz4APHpKgk8PJfTVkAUQep",
  "key7": "5RYJE4CEmxhSNjcu1U1SxJC8m1uBgiENhKWPkgD6yBbLwG7dsQQP2kGfYwQ4o4D84to9oVwud6CSxstuPgXpeuJT",
  "key8": "37RC3UXoqzDZdaeVAGvuTyppNG34wSeGvF321zwYdPry6Cbuq71QhuQRbAAWncZZrSHwUXgv8KVnVaFUXy3k9rvd",
  "key9": "2wPwrW6wq55LxXEs1o3qp3DzRLkTbawDm9hptPM27hzE5oZughX55aeCWnWPqEuyZ1vs1sCQZSUpM9WpWMF4aQcv",
  "key10": "4qEiDXKETRJftGffaHENuD55KwoS2ymuxeAM58XpWZ7cV1X2aJTr6Y8dro3pVFMZJhmKH2unnWb8S52gmNWKD84x",
  "key11": "4fHgfPRo3ijwDMMqbg1RMKvBDpKtFr4sE3H8sR5gP3mFXSKGssXBVwMnnHPLHuzsrUM8ofaQGhTVToQAHP2fX6gH",
  "key12": "2dqwkDiUYBBcz7sRSLg6PZLNQuZ3XernwymVugMUjfMaZVKqSBopYcxv6otbXPstVs6sW1BUQN8kxX7kFsDxMDnc",
  "key13": "2ibCAHuNyx1KmZagdjsFEbPUC58Xu2saNAmP3qRureCXpBCbvLpfWp8FPDrm3hC3Gf2HKAxJUwqTwdcGTfbkqKpP",
  "key14": "2MhDsTRGy3pPJjBwGUXS42jbUq3n6gMs3MQdZ1Ji6Z115XsppNcjVzcegeE7SryerNVjYSHqHTUpG69eUUHAVxNS",
  "key15": "2BBQ5FEC8wxPMgSKtgFMpNe6eCAarUq4evJKFLzcgPL517E3XBk6sw9HpFEKRHQbdCxBFWhNV7Jni5hkrPLkEFbg",
  "key16": "26d82LrALyo2yqgrKNMbyDY6KhRmaY8jmHESt4KdgQUDNc6k2pAN8jiuPBJf7HwHWdG1E474X4f9RcSXmaJPXNx6",
  "key17": "4Yhi6aAu9bJ6Pm7aPb5XAUxShh2XghYWdzZz1xvmKifQzPNbHhQRrNPNRJZk6BvpbCtMJNG215HYQh9gBfpG2yyz",
  "key18": "XDyRvgV11H8ox45EsGnLguS3iJs56PH3DwWgDCDzM8JHjX3zo4C9eicZWN21k226J6PYx9jtt4poBUsxB3B7apn",
  "key19": "3b3basxQt1HMTgKzcwEtyro2e7YPHLraKZDKwoMrpKtWc4aTmaPoKWm3BqCVMiMWnjPXj639EcgH7WyJa7rSvK1d",
  "key20": "45aU5nHK92hugGaucTjruCQy6DX8aAQiGhPpztpHGY3huMqxiycAoDHTDKERFhSvvrmg36EQzwgJN9BkPv7UNu28",
  "key21": "3MqzRmEGWtSMvt331vzkX7TK5zNPBQRzPTNpFPKr9fEtFbyeGhrDXJ976BtCUDTvSeEBqn9fCcSL3rd9SfTMGTeQ",
  "key22": "4iD2JArNMysL23zd7u7TNobWy4Xg6o76Zt4naipJrBMH6K3JXDDT9mVQhvm4MKRKSsTnShVH1hehwGjwC8EAP8fF",
  "key23": "3q8ZR51GwSfgjfkHE7quGGpDN8nyFDZNjYUTWkyreuyshd6sE9kqfK1CcCPRHV2y4NYCTbBsvyFKiJ8pDrfmr9zS",
  "key24": "2MeHNieCgbULV7iuWp99Qm1TYqGs7JFJ8QoS65r3BKUCYi1yZEHYWHhpCYzeQb5Zm4qPEZymKYuh3hsGHVgGFLBo",
  "key25": "5ZwZxyHkLBShjvFm9y7oR8JwUzz6AjfCfTBatCXHXQNMhKfT1UzAXzRDeWwPFg8x69hs84a7czKpKMgVi1HHiUND",
  "key26": "4diZaWrRhX3tedecN2QQLgdJwuLPpYjsKZcWsVFnYa4SScpX85EDRDgxWuWHATKW9WzwJT7rd6gHfFsk6tJGv5EJ"
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
