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
    "3q3MNbRoSHB21kBA2A4pB4pVAWGwZkkbLoZsFNqH4zQQZhZKjCC4bq8C7UtwAcJSMindLZ7FGfGmgTkhuS169g5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TB7F8Rg9aTPZUk8mJu7tk9uy1E8V2btZbHCVtJorTS2oZgJLLaKzyBZobgQ74fMk6xUi3bExpPE3mk44D73G88A",
  "key1": "wEJHgDMgJLhV2xKVDV1R9qqisNqssRHmeHDyeb6UEejG1DnPPJcDehSBgBDmdR6QLY2ZtUVo4eJqoRS7E7dypn6",
  "key2": "2ruoKQhqh5Y6sPg6h7QJdv8gwjbuALVAQBX8y87pVRg4Fp64BneCG7DapEjwDDjh2RgJAKSxFAMDPqyGdV4szHzP",
  "key3": "35KaQ8xiwrdfPKJMDLNriQ9Dfstji7cvCfEzz2GADk63RqJKXNmca1TkQaJQj1z9HoL7SHMqGnmqnSPxogcWqeEv",
  "key4": "3wEA5pyzkoW8kTEGq7j5qVuddAjMKX9kiBPJ6BEKkfbSnKD6A6aP4H8nW7fE53yoRv7yytEh6eiZJ5Mbqr9111va",
  "key5": "4MgyX44cNFCM86djSbzvL8Mjd8zmPVq3kcSMpZFAVYSkkkM4XUVeZH3NKLXfkNxmobKiDZihkQgMbRtUtuNPkkwx",
  "key6": "4BMWvd2nT93inMWrYMScBgz3zCxAizvzZTjj1uvF9ciy4ZsDASFkvKH7i6R4tXFZMkDyDvbhBWYm1FzZL8iuhWnV",
  "key7": "3hRNya3DbiaQ58vP44vv8c44VeJuW3FpE5Rdq3qyhfcXKvmSfErkBKSUHqVZpnVdYde2w1zCBEo1MLbeHX7Q8uby",
  "key8": "4mc45NTmsA3ffxtMWNKudHcvqsUccJQh4N2Uzd2QdznxMzA9sgLKJhisqzhjcDdKB8RvYj3oDYnmeAumEsKV2Rri",
  "key9": "PpRGcF7u7t3XNVEhhEh8CGCiW5EFEDDZHi6BGvN3TETM4YDjmDwQLRqMGauMUKFG2Nt6HaAbZGqaD1ia8oKUzAB",
  "key10": "3tFx4b8PE2ZLfishK2C8gMbKzXYfGyk7S9jQz93sTweSNvKX891nRxAc7goGpox8g7MkPvgraeDKxPH3v7JKcnUc",
  "key11": "2diqBCaXYbTjax9RXe6pNbEp8VLeDCLQGRaUo3ku9EiEX8Us7YQBAaDdBiroGviNfGFewz5QFXJ1quS5Qq7Y9xce",
  "key12": "GeF8wyWxz8VYeac3JZPPtKFte9rhqrrNgniDBHdowLtft1tu9CY2TUeBhiTWQsyjscMU3KEq8v9BujT1DHVjWUR",
  "key13": "2LhTzFzg3s5CzrKTBnZ2Wt1zryL8oGHhFvedPqTxj8L59yqTC1J6cPWkvGhgLRMV8gDkSJ6izmewba3buUC5kK2B",
  "key14": "5Xk7BzGaiQ5UE9sFMTDwTt7sVxKzBsorBihZpyZfmEvQtVmmd9NgCTr9AZoWfNbXU6C5AdnfQrPsEuofRmss2FYP",
  "key15": "934eyCyUTv6osdCV6d474T7scQ2E1Xa5477N2TNGJZ2YQJKvpeQG6dZnsrC3sTCaGRL4TQubRfoVYXCVxJ6deKj",
  "key16": "3yJ6crBN4Khwyh3VmVLhWAGxxXk9mgwze3tkqtq34tD7MCv52johBdv6TioEthmbodPRK3vt1zPnqM13nzqxKkyj",
  "key17": "3JcdnKD7AHRmPruADXDFh7R5oCKD9vi5BGQuRVTRcuchW92wLwqmJwAVSmPk6Qtbs6gkrri8S2LEMj8TM16pEqoE",
  "key18": "5qdd6KBLuPwtkJC7fBinvGAnSYpHXaR7Z4jnPqwdyaqoVZGTYLmrAKPNCFCqx8Vc22fRuNRkn81N9zsfRvRffiP6",
  "key19": "3kr8QMEtJXMBsy9MEq8hNXWXU4JULMnMt9qdkXbUUdk8K9EiwJ7dyzaeMpGiMqfdqd74CRC7vWkvATVAhdoHWFjq",
  "key20": "4nwaEmczz2AM5xu4DHoJWh1gZckRgsuyXK5EWo78ZTdjiA4xoADddnyNLmgfuFGZ81EYaMaraCnJszkHPthVJEsD",
  "key21": "5F7cwDrC1QsVLVZw9UvaWFk7buShT5jvWrCuyf5TaWThRfzpd94kvJKX96F5RqJefFMEoVbYHNUXNCH8etut13VA",
  "key22": "2n6SSWhQYX8qz9qyXE254TmndL7e3Mk9s7cDtC8jzqCk2qwK89rgUZ5B3BQ64RU961ECvmunCs67GZV4maB4xH3D",
  "key23": "ofHaotRL7d5twue5gzidiRX4mrcyCYksNVEvYezFen5biPGfAX9mPseK8W1TcorYD8Ez6jgxveetSbVAFF4gtt7",
  "key24": "4DtCqphYyd6R4eWuo6vFSzfLb3pcYg9WoUeh8MR1bBh3gPaq4RUGsGyqkSnHhmF5UB56iHz2KJUvhR45iY9Yivi3",
  "key25": "4gD9e8a4Bbm6NoHTmjSVsnYeHZ7fLrNWhUsNRbtTBmV9vq8m1q2CtoF6mA7g5H3eC72RBuaAk28CRzq7uedwDCNq",
  "key26": "5XXx7gg249QrAnyH17XaszicknWYf1M7GU25h81Xooec3BfAP1yRWnKdKvcuHxtHeYdsRBt2NTxbyQ62EnEJ4sW8",
  "key27": "uSy9KJUWyjXRtBGVdiM1nVjAvoHXfcS1AksbfRxGB37HpSdNxUN6aAk93rRNb5gLNYf9nf1eSqSGwYhmuSZfmuP",
  "key28": "2q9HQcHoiQtTi7ZMJ3MhURmtvyBwPvn7HVUnGnNAUgNy1MnpKhuMLjA4npp7oLQbezXchnx3mcdoYU6PPgbYtt45",
  "key29": "5XLGDZcZvMy5HVnhCmgV6xE2NUWYMmuujtLLoZxmeaAzRERkctkeqjeuiauWW663DLXwdwJn6QFxvLPHUFN2vga5",
  "key30": "F9gzsVGJvfRZhH2KBHBtJGBMBqkhSu7Hf61JyB1xBaN5yS5TchtMNBqB5vgvqrwucbc8BSVBEagHzYmYZq5dQ2t"
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
