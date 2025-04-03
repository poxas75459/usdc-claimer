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
    "m67VHePEyqxWnbhtfEMcD9Yn9EVi1uAPD5FTabRLuVDp2LGE53nnAeamjYfa4vzs7aQ2qqrbNrVDbhsXJS21vKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39LafCzeq3okBg8c6k8BeANNXtj7QLXRie2iqWEyyB8yuV2Vi8CTerkomdVynV6YsfUJYL9aUaVsKFAheoQdb7ZK",
  "key1": "PnTUoeNAdxXfaQtSvdv5V48uGxaZGpfLtw1iXiMNgk9NxX64BTqvxwxSe5UPBtBYxfvnwk7NZQ2RELrC4ii43dt",
  "key2": "3ALG8tqe98cy9rLWcQpK7mQT3qNCkBA8QikcNvLWkaJ5eDap764y8LyrSNsNuwnV1LxGQnn8G8LmSwhxXX3vWjrW",
  "key3": "2MCwmFJHbi4HQKAVTW3sJ2sDq4A6jYdWjW1J1j5LTGhSTwJrWTZzr5e2RVQeggNx331aRvdVyGLEMf9G2t7ewN5s",
  "key4": "2G1rE1wgKYKHke2ouWvLa18mXuwcHGMYH5RuPvopxxFFNYwexo6tisNVU6ypB26cPNS5J8LdLaeDii89w8ze6gMr",
  "key5": "2NWEw81Tzt8GFxx8ZAQL4YEnEHmdkwebs1YLEaGGeULSN1R3fEgsEZsVBm4twF8hpJzcKQj2JL7Qwz3vHsA8ptjt",
  "key6": "4oHudhRPqvyKPHdC66KPv25Qt6CcRDG1n3ZkggLf2rokS2fa9Q8NCdZVoKXC8t6Y8j1CR5KD3ssouWFLWJRXywcw",
  "key7": "3UhHU9HJdzF1aC25M3aznLP9L6gr331GmJf2TcjJXgUr3AQg7oWn635qbMfzYdk28jHRf2Z5UtL6X9Np9upYDPcn",
  "key8": "4K6Qaq4XnNFdZVRG3q1q5eJpEmMvFXDR65rrkxZtrSHV98Ddb2HLcYURUxiYnmWefAestnGQDjkwDMgzV3YVRj3h",
  "key9": "rRN3wJjGP7dRkMHpBC7A6E4QHFZTxYgm8JshPb162jbc5ca4jnWhhYZhUfwLn4co6TqwFXGw7JDdTFPiXE38rjB",
  "key10": "4HmTnoskooU7j5sXbe9QQsNZS4EkSh4zbSCKNj6vhWoH4EgC5CjfDwSCrGYivyevucNhVjyV5QoW6QV4c9Kizfis",
  "key11": "47MauTxXRVUSZ7WYcRZonazezX5Xj7fEMprgrpj7QTTpbmF2kCCKH7StrGxWShqaCCxJyB8N9LTN6dYw7skvpukw",
  "key12": "3XgTDbMGCCShhW3ayoMmi7vME4imgaZhZkCdph4RxKBC4Z5C5bjHYGLMYDVgBZKGgj8yU5ere94aTjB2qC8gh99i",
  "key13": "3GEMWnSApFCc69M6fgqBx7BADBUWhu131h4Mm658iRU5mesMe7XRrxa4VzmZg1MpVy8499tadB5LpoQgin6h6RrB",
  "key14": "fd2xJ4vtKHppDe14Ev49yztBHjYWVMZMzLhKhmMkoYxmUYKXoRHQ8rwyRNB5wb4CJKg7ghEZveQMaUf4oY7SWD1",
  "key15": "j8dxTnhA2mPTLZUnZysV6EoFVLQasXFyYVszWZVN3ydft9jae42ACBZsUdwV7TFJUnqCeSxbfne1mCRLPJfcQVx",
  "key16": "TVpcPriSSRFQieWNFV7F53BxrnkhWBt1NMXAMnq92gtBgPcrjfFB6Q2vxEefcizgVbcJimgiyyiKe2CfksfNqKP",
  "key17": "5hKJxmiQn5moeY7SN3CTt45AvE89BwJYYXHjqaa5VcDa1y4e52pvGk4dDcLXHAGoALRRxUnEy9mQHqSG1cs3bAFX",
  "key18": "3XQkaTxTfhFPQJYETHFzAHcqu3eJe1YzkAsmY7RtSqWMhjEqURnCLyAsr6LoA4ckL1rXpt3kAoQm6PEecfbjJtn5",
  "key19": "56daLhJQ7DGEZ6JuXt3b4HxFvTzJRmKSatV916n1SbGbHbf7uGYkCoMjLsAGVQa1XdwYfQxjuC6uC1bWm8UC7SfQ",
  "key20": "3jjZvyuLtKrZEPNAtsPmqYwf8U2aCit7VuwMzpneoCwUCZuTE4D4oofvn65WUAxwMJrSj2NeRoedPSWbEpvDCq5b",
  "key21": "2oQ3iPGHXM85tYkxdAvE5JmAn7MjXugyxUdCVSSKjQGy8rt2KALWCPARF7p5yRq3KXv3jX6cw5qjveskmPnRvKYK",
  "key22": "Ay1B3DmntmxP3x1Ks36hfPFaxjGEhaaVR2hmYUYJc9mxHcQGd5qUAdzLbT3GnaFwtCinfAKNexZRhbpCaqLa4h7",
  "key23": "2CiY34Mooh4gpFk1qJCmbS3hdv42x1rap6i9sGcKszUPiuR5mnmQN3zYU4pMKwivshLjEQ61Q1dr7ed9rFfzARdt",
  "key24": "4UekfmrLBcYYcJminmnBRzEMq7hXEVEocPPAUm3SX2j5djZHksc3iR7WHf5fyKPkmJPz8qrqxYDhxNtwSMVG7csJ",
  "key25": "3A9yjoG3n7VSv7TetmJj9yumcUAEtMMuvG7X3FY8e4du8VTQMG7QwmvStRCZFw38sJu9AaAfprNW2Zv4mupGeroL",
  "key26": "38TxoPQXSi9QRTBbWJ9wz2vvedqBRSmQvW1Ju2duRFqmKSneBoSAWJaxms754nEHYTuwNGZdXUKGZr6FbctLzbz8"
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
