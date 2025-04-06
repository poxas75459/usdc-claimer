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
    "PfoVrVwS5q57cHUHTCTM72mDzt2nTQKUzWL5xGQKBw9cByYodgi111uGfGq5EZMLHJ2FeN2SggVGkWJqgZGEQKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gdx6hc94zwvJpt2Z5wXAPTqhYrb8sENMBBYqi3hz7hRofTdLprLi1Gb9yTFQvt8mg2weXZNPkp6KwTkSwAkwPrm",
  "key1": "nFViCtRqR3tgXodp3t2rRprJsUEerPhBGsKtxc2vvRHBLEfmFspdiL2QqHDiZLfVgzxo61AEML7tC2yKufo4XS6",
  "key2": "D79tW5FbRAqbPb43p7LxzhpNrJh1uepZ4cyn89hSCDzx28ACwegkH5BYiacTpkDZsfyUiYZrj67Dou8eTNGmwQi",
  "key3": "64C8bcXKixh8BTwGJZd2xSMpERbVR7wm3nUJ9ywHBAaGp1tebWPnENUcnRFqT3iLza3qo5ngKFqr72avdUywSS7J",
  "key4": "2uxSNYfog7kNvEhfj1atvECJUqcD3U1JQoFptVRpMTU7KzbQzLeqiwr9DzEDa9w85RsHqt9dE6Aa6aetknpKQqZx",
  "key5": "5GghmRsc85b3PpkXk1P4hubNrrsb9svDfnotaXhLkXp4GKhPtSYkKXG7cALtMFUVTHPpcL4CtKZQWZE1rY3kLEML",
  "key6": "5KCSYbH8totvtn6FmsfMV2NMTJQc1naBwT4vFL6j8heRWgS9XhuTNCQYH5kKUzNC2nZtE962YoALxjxgkiywZ3um",
  "key7": "2i91Kxo7PkkAqmQZzRhMc7bFoF6NiFWaqyxBgiTLW1aneukWBn8kyBVuRddfjKCrvWtvZU5DH5StLA6BaZuwGv1e",
  "key8": "4VwCfF66Mvt7k4rRcF8NKKF1Gm7eNni8PzF1yXjSqZURCcffBuL6y9e9nZkNRnWh1DVghzKQy27eVgELi7fxBxCu",
  "key9": "cReBzc2iztmSUmGoNjgE9q3chcQVgEPETYK6cvHGb1ptWioW7LbrmWR7qFUFLZtqR7AQQhjCbz2fiZ7j6ZyQSXV",
  "key10": "fdZMRHFiiYBzKCQAKp9WsWMYNXCcCmi4DCqCtQa4inwfpgcgvaCQ78jENVtxwrfEePi4JpNRrhpzbGmVAe5nZn2",
  "key11": "3eupb5tUa4JApBWmKUyJ8iFpzkh3omaRamkxrAEHxkbjGppneVkzUrZ4CZdZbkheZ7RZ8EgwTBexztSaWX2CUXiQ",
  "key12": "4SBhPme6DUrJtp6CTVkvZsmPJxb9VGMTAYBktMnKPw4DkqgpcRYvuBR9ahpTHnMLGezzzGXu2Hvz2cftmKiyy8FX",
  "key13": "4e1Zpa6oXkeKdEqBti7x52CUMHFkerT7SDBFKmCt96HEU6dCH1HQp86Ya9NNiMQw6nr1H6fQYTz7cvse1bv3riGS",
  "key14": "5biD9z53C2DEQjMDhGyEfHM2AS9H15nw466XCE33RVHgBPaEhH69Ko4PPRKrdjaxnjvKL3BkShko7ktErkAFoJJ9",
  "key15": "5GyD7Z8n4h2waUDZH615eMyzmJmRm3NTRmLmYM17GrpT9QksXiA8zZLvgPDs5wMvyC886jrbfqrLqgo1ADquYPBA",
  "key16": "4PhawqDiyCbL9vUWGfLnLuCoYZVzVR8wwdm7vjR4gxGyV7qAgFXpTeAswcNcWChAVTVjYamptWvCdvW84YQrFmbg",
  "key17": "5M2ak6bjSDY4WCwuyQqryDRPwTDFuwo97tLn3wExtSDfqctW69mRQrn3dXhTYY1Wu5X4BwWdeMm8czhgrecbZB9a",
  "key18": "2HQG2kLTAvrKsgVPT6RT2k8FKPSp3Bwzakk9dzJ1JMjNvC3fcNeMj2tuD4ERwMu961ywk5zB2kxwuWWx1HKX1PC5",
  "key19": "3cLa6xBT5tXV5LAjxokKauxNW2hCn5T91z7usMLjhw8KDW1fnDd2qc69LyqCALbAtGJm5cEw1QbbaYWdf88LWBw2",
  "key20": "2Y6y4WuxguWUtbSdqVRvc6wJqn6ckv2aQteuV2VPDJMgNyxjxWTNKK1UHmcXrMLwNXZsn8x75UDrBvBjJmL9uDwx",
  "key21": "3NNXUHk39XsubsBna5nWbX8JDKkn9bcXHTrcxnBstRwi5GQtwLNFth2GEujxRxxHAgSkXzwcHiDHurTywAUhZPx8",
  "key22": "3XASYrS5me2yxtyUzWET2ATSYbRhLA3qWKEiMMf9XfrzY2PiiZC71oago36j8miYbfktsmVMdfa6Fx49amUc8zQ7",
  "key23": "2us7Jrosm7aC1hocXJMyKR9SAL8EXWrp6LaAJZrwUydVtqe3aEvG1rAw12qGQRSFPeJ76q5UMWqPu9yWcVsF1edb",
  "key24": "28Qt74rtDYQnUroogpk5XAGrMihokyESv1YvzyGSoDXd3TqcPr8i3wE2aHSEV88JEtJwhcDWX5jaU5n3sf2v2ivb",
  "key25": "2YbcsAwyWMHvdZNCmhgQfMFwNunfSP8UrNzw3rr8BF7QBZNm5TXPr1FEQ2YvCvDK3kgh5dPZ1qNoXMef6J2wQFPA",
  "key26": "b5e9KyoKfdenSPmih7eimJJCiXGfAJs12brsjQYmDvPCX7CTw69vtjiJBGc9NQM9q7hQ458ebZeHCXbM6RjUvGa",
  "key27": "4oEkBbBz2T9Bmp3SBJ16PTLviogQWCcfm236zSNm5ynv77bB6n1ypYH8vAK6n2xFTaQTBwHSDEmBzpXcDuebeMsa",
  "key28": "2VWjEnw66QBRuJnX236KDYZ8wcAAtRMRMf6paVaRsWGySc1C5CA95WiPs1DFCTXetuPjjGkxaDydSB3eMNEyXScb",
  "key29": "2MVa6vZ8vH5PB7UL3mNNrhWWcUmVF9PLcDtG95gLMBkYnaugYukMDUa9KZGdghU3AP3n6MVYFfsM8W8DxBhSAKYm",
  "key30": "EY6eXyvxLddWrY4rGaj5myPAcVk2kaLQhFuwJbdTQgGRdy9Mq6cejbuLn3SHNGuec519P8FWgwJ3kdBVyJKpJsG",
  "key31": "3BKnhTNMSzDWb8XNs3GEDKJ6oTss2PZAAPMSyYxSU2V4pxe54sBrky93cnCR7PUgUtoraNaPKpYweGRSGk7Qy52s",
  "key32": "441ECbmZxxFpJX1hjGULAnN9T7Nq4Hhq5oKfHYQdHp5Ao6bKFhSuLoN9LiHQg6zqqyCqBghPAay62arr3gXzkBUi",
  "key33": "4B28u6q4LmMwvWLD4tMinDAv1B3AjfoqVU3i3kCiUmFGiVo4fMPe4hKzyQDtCfbaaim2YNWUA82hR5GLrYQuZKF3",
  "key34": "3wtbWLqFhqzXKAu6be2DWGQa3VfJUKvExfcy7jCUo2uS1SNE6oe1fJYFCgA6KcUYEvV3VD1Pe3P67YLGqMFNAHyJ",
  "key35": "4Gh6MkUZ3T4FjeXTqreSXuBfMLFvNyxY1pQ89sMuAFagndLb8rRkDionUTXMW4BMMmX5TDqmiki2Y1poveakoPLm",
  "key36": "3CyVThG8pn6fhn3rQ2Mcbeuq8UiEWG1Ff3YCskQNGiT33A8qfwEgPNjny5nfnQMpVkJYXs6qgT7ZYFp5on45QsMj",
  "key37": "bztRpihq8NE5hBUR48VBq4KwFK9um2KsKzGKboaNRze1azE4P9w3UKitTXP8x8Dxy6drcWMURd7eKTAXRWns4mA",
  "key38": "2mULw7ZhUEHtGswoFDnYgUAebyereYyRQmTaxXbrPGYqfBWtPFNtKdM9MyMWXgukYD1CX9jd9PtYtKhnmvAC686z",
  "key39": "5dZf2mkvB7ZuyKFJmLzJKmzzK5yDh2xyzjJE6thTnu9tzs5szKAuRKdn1j4E6NvG1s3BHEBD6MxxdnGx3x8W1ZBm"
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
