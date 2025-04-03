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
    "rfXQWUZqRxY7eYUTuN1EuR8JuFsEBWaFQXkxYmoRrQHCMGpLmoBAeFn5SPbzmvnnydmTDLe8bCDz1TMUk5qyHo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4go16MfxNeatpLQEKio1risfYVWgKdmBxAn17dwaHG57wXCD19tFfZo6gve2Eu3EUXSmB7dZvLt6ExdxNAFj2j9z",
  "key1": "2XSJqhQFFnBk871eJwgmzR5QvwecM9jxpVuvUhqCzEFZJxSdnRskmPLZ6Zkpm4QtEvv2JqtjwJHQWVudcr2rGoeS",
  "key2": "52BoTRE4xiWDGLtbpDfAhx8p7Z3AAFZvC1aqbbgf73AhEuLZ2u1aR9x6njm4Aos479v41EqEzi6R9WxBe5rZfNhr",
  "key3": "FWNT8petFqvrPNN2ngq5TruNnWFXHrVKtzg9ck7KxarEjXFHQrt3ggU3rWaGGsVSnNij1WkaJfJhWSzRMXuSaWm",
  "key4": "7KvhskKVA2gAGY7fCUXJVhgzoRGmpKcY92dyhDGoGuphx4m4G4xT6HEqEjXF5grDGFsKGg2dYDs6iFTnzboaqFA",
  "key5": "22UwwPhBqifmp7tywCK91DMowmC4vQnPrCb3pm5Zoxvq9Wu8BqaPq921eeUMs92k24YJVc6RLJvmk8KCgnozamee",
  "key6": "4jMz2KLiuuFKE7NLogYC81V8GwMTX7gua46MSrsB4dGbB2Fvce3Y9f5sThpzrdwEhsmcEVEHc4WGXjkZTj1cSRUR",
  "key7": "4i23n3zybQ5VKm5XNaVAbAxv4hQU8qA2BihvREPww5ksTXuuAzDjK34c5pBDKKk2PapEUiTwiZCchWzFS5bBE5HF",
  "key8": "5qNK8UH13WveCHLKaxZ36kzca8HoqA4TXFKJtnkSwjqDwpaeRvip4tiDtk5wkWha2agSjJp1XP3djDoKfDrXCvf5",
  "key9": "3ULBiQeuyQX6bb2tXGC59c7vPaes3y53KZZUttTnswFniKQvaSafGcrVTAx5atQcqheqmaQr8R7sA6ErNtsZRHJx",
  "key10": "5mLwQaiJQX99YmkYVVYPMV263yuveFGVBo37vfAySie8PGHbga1WwkgrLp8VG53rfmWa56AygHnDqFKk9eBUVjXd",
  "key11": "32Pr5QuocVeaCNPnxzGaxBhecb6Vf9iEUsX74ur74mUv2iN2Av9VNMnLNEcpDYHdSWV1FAHq4GsNY5np226JM1HA",
  "key12": "5tkkhwKg64MUov8ywNFPvj5Fa971SuG8h2Qw8yAkUut3taEh1ur8cFuXHnaomg9LbaSD3SkZ7rvLsBRoq3UCfKzn",
  "key13": "ZXU4eHaete2AAAEq6LYW82Vf2zyLFbx9CjxhnDucbmTZG5j22y9L3hX4hGQm2uXSQ6Pg2tYYn8rSqabsfVwE44M",
  "key14": "3jMMMTbj78NZ9dXKjU9VS6Mqyj1pfWRgmVaULs4MtF2bvD1w2NfDPBfH6NgedVDPQ1QHvrgcDTgmpfXwaLnDRX87",
  "key15": "2W2aA2PuM3vJkmHsPMpTLTaAPovAKBU8XahCE1WRwAMgnKStRCrDSADnroagqrkdAmurNpiWCWdYkFj8EtWvAsky",
  "key16": "568UchRNrC2iLrZtEHczZnNn8wjM1WJippceANqcrMQ8kJci8y1PEWjSJjozdj6vkVhscHR2B6GyoFnUMddKfZby",
  "key17": "2tJoseetq3gZiRBdGJoLhozhPugy7oGGXtNekxvWv6C1jNaDf3xy4NfNL4EwgFifxoTL6BfpB2t5LEmnM37v7R9k",
  "key18": "3GdSRG6t688TfFtpsPAK46hydGMAC8YZyVrFuT2keCZvnG4TS2dbqXzXSEjddtLPci7yWFLgDqU8TcFxMuCEgpuM",
  "key19": "3zV5q3zVGninwsTQDHBsqpUjDvz3urnXcpmHJS3vG8Y5bUxWveUiKjrzCfA71z7c9KEhh8zbthrsEDVLc1YBTtMw",
  "key20": "2xEKhFEeKQvgsc4nF2vAiLwv7GoN1CBUsrnAMNbipSt8VqsCz7CT1afxhVzvHffdiLhrd32px3s623985KMgEAji",
  "key21": "4au7EVQ5BTJzaEBrkj4vxiVgJ4oFLGpMjT94MiSXeQ7psM27dU7A6j1qs6eqDNbf1XURZDDRZgVA2zXDXu2Ri2N6",
  "key22": "4Htw67ABo613d9fWrLVyDtEWzXCzWewjNeVcVvhJziqjpqS6APAC2z1zh9rsPCgVXY1Es2veFNoR1Aqo18jiZ5hf",
  "key23": "26RdgFbTSPDv8aFZT26tuJtP666mVp8UNHx5TqtpNGRJfnDCrqBEnKRKSd9CtZdJKthC5cF2T4PCDGPr8EBhTZZe",
  "key24": "4tUWU3XMED9ahTBqKPy1oBYFgz4bjdSL5FjaMM5yRjs4qY4vWNj4o9rJqmSxgTGXztFrRv29yxGs8PfgonqG5FQw",
  "key25": "42wpfuKDbXF48gXhCkckehuqkoSj3GeGrMAEVXoo3hfzMpKycsKA9L6BsKCieskJUXtHoYcb2cvw9phYd4cv9PDG",
  "key26": "5Cn4fZKvKpvoYLD3B8rCA3aSMQt6P3WjyvAUvmwts9KoqNpUkziP7haJtY7ysoW5njTLGaYxcdxv69gpHvfU1Apo",
  "key27": "m1XPW4uuBwAX9qcJsL2irj7VpCrtUgSurHeLDJ2ZTw3hGHF2waWWBjdoeUEaDTzokW1q7PYiKep4r91HNX1X1py",
  "key28": "2ZJ77HbhJweoRfVosPaS3xzifCUGA62vSAcAegfLVf4pkiy7im3sbjf7LCCgUPK4QgUnRCTXBRng7o3NHpkYacvM",
  "key29": "5UpcGnUuGGHx5bS3QUny7LrCPdsgqsvAcTSrsVwhdJTh9i61ZiqDfPV3XCrcCFVhRdvitSGF19juEnKHDwk86WcC",
  "key30": "4KkChie98aNCvo49VFWWZ3twwgAUwWN3eUdidPGBAWhWpmgQxgEgJBvAkjmWLbreisi1xnS9HEyZDHY11gZbgRvp"
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
