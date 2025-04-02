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
    "54S1r1ppQNceTz836ummYo75FgUjCGJ9QM17orJ8iF4LZ5JhHjGR1RX6bXDfkVHwt2db98K2qBM9onVGVsf1XpSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ECLTW4oK386D4gBcXLf6dPM1cyR1Gg5pAQersseSCiLgWKX52ho37PB7NxisFwvjX7tVoHov1Qi67M9ddgX1enM",
  "key1": "k3NDZpfuEt7dXnKYJDUqnYG9fhXqtGx4bqxvvUNyW3t9mwdv3jdsePah8vXvhEG7jbWw1exdHWkkGVgDk5nrstH",
  "key2": "5Qf4DiVNjEPeGKCksELs4SCGcTRXX6J5rvQ2wSzzCAvES3gLvpfnfAHzuW392uEbXo7UeCymd8u4BQEoKScg7EiG",
  "key3": "4r98cPGE4Czj24oKRt6QK2Yap5TzDBBWCmcL7k2gckCrLGcjqghJWn5GHpNymyT17mEsvvG7cU364rD1dvce2FML",
  "key4": "4vquTe8P3dhpFkYfES4xByuiKy5HAkhgxXQu5WKW1tqbnvqFSJyef3AaP7NWAaXENcF5ADNtYaWdboMAreDgiFse",
  "key5": "4yicZcJVFhUt2ii4PkwfMDVGqDdE7cwS7ir6J9oAFZ1Jw1bnx8diaH7qDz3xfn6H9CYf8zSBahAferDDip9K5wXY",
  "key6": "4F5kXJ6L3tsqg7vdLZY89Rxuz8tjcVqFKW4JbmJqNUjho9AvVMpzv89LFfS89k15QKNdZp83uqVRapQtPFmcMwa7",
  "key7": "5wv8JpfNbvwJrXVpH5bj4aDvptnQW3yrFCBam2vP4rQjLjaz3BebzaE1Ch7e9iZSS63F8F1RrH6iXhKV8KwUWhYp",
  "key8": "4WTbBXMvDddd7MJSYth5yrdmwChrKEMK9WYiZoEJ3bsNTLdaiirnrTyPDJM3dxYER3x8CgjrAZgCuudnSFh9AbtM",
  "key9": "3vajy4dP9uTwy9SNH99Rxxovk85d4sKjZXw1u2X62sR7ahZizmby2cvtvQdHpvumWM4fhdFomvCDhzd81LdRcvyD",
  "key10": "m4gndRBK1LqvW18snYL2k92kEx6nA3SZbJQ5YK9MSPoVrsfByAGKumdPLSVPg5VTHjLqs34MdsBDnyk2auETc9t",
  "key11": "sHRKQuRgMXEb4SRuqQVpJCrmZGUyyjnkCmU2K7GVoELHdEjnLmf8jYYQstmWeJZm1sjaBFCcQzPfSGc9vXkGFvJ",
  "key12": "2bLiAyQV7Mad6QgHhxkH4DeqsCtNJXsVmYA6GuLfD5SW3hbUhc2JeuEbJ4sDG64Eua82hFzJSmqDyHGg3ddSMBaa",
  "key13": "3ASQiTMwfFBQenAtqDKPbdJEGXxDoPpErWHqgo73xXj7i1jgQR3LSzpgi6q5Fho7u4itimyYqVTsEYnNW6gyH3Z2",
  "key14": "5GJ9yjNQrLg15zL2vYYfG986o6kWasUAcDVYKHRf5PwpZPyvXzDHc1b7oAfG8Ho5z5y2stpVQUSjE5rWbTofiCmg",
  "key15": "4hhuBA6zMzT7vDNS9qKwJGgiQoUEwDYkqqiW6UwwRwbit4d8ixVHL47NHWDEnoaVecUhz2RhpXzBiqdr2mBLt3WP",
  "key16": "2teZRikxtsXF5EDZeLc7yV7m8MHMmuRC5L1rJ4kt27CRCt3r5n1aHMFT3LEyGQN6DyzhQXz9VJgNDkkpiHQ2ACFC",
  "key17": "3RUuPNCJhGCvv6pkV5zovmCUwjcciiwhtJ5Ej2Cm2vhF2nNrrkqBJoKuAug5JeX1CCooGm4SLMcNExqXiwWLhb7o",
  "key18": "58hc9ued5pr7QJtejx6ucmPxaFeQFnYit9mPLLZkQww1fHGxKLY9BR9pcHBLAoL6GiWw8jofGA8WzmkVdgxejPh",
  "key19": "3o5i56NvknzmxEiLFKJyeKzp8FUUjZmSzqLs31iCGmdcWQH4d1A2amSvFqQdQXywbjBacZcVGtBBSMP7F1bCWn3p",
  "key20": "ewpxiCkACvi4Vae9TEURZDN2HXLDFfNm1J1rwk9oE6oRbfrhohJ7AAvjGidDjibE953bpiNTdi4K1dsvtcCJWvF",
  "key21": "gyFq5gpgPPKWXpZuyHdYQGtaUTc84tNrnTrKFFtWXPWpYNyerfUEbb2YNJy9cTNGUEE9hGw83ka2xu1cWqaoqb7",
  "key22": "YULtBbsTTxDFSTb2wLxtg2CyMVS1Ah5G1vnLi5XtpCqiddPaJr2eZvFB6onZ2Kggb4cHLH3ytgnWN1n6QoTYJ5u",
  "key23": "4QhbqHBewCQQBk4UhqyiBvLgdAHydFgAuj6kr1mbPpqN5YS67N3EWsaSG8F61hnpiNR5gDBAMFyyjntWv2pixQ7B",
  "key24": "5cTH567mhD7TMez5KQZUzoCJGQfEi884jLqfc4K9uYHSuERGyistKoVRUrPheKPjUB7HmCb2jx6CYwWAFDaYydA8",
  "key25": "3qYYBnrtifBAwRU8wWbi1E1SWrzXTmV4YBQcwaQ3etjSKBTBDsSgRx2Dh9HanMxSvKnLSDQQxfssFHCASuiyPpnw",
  "key26": "2WaUCCmr3iH6V1icTtwoPS5vWdFiJQSeSwZH7jCAQyeGJP9kMh9bd4u3mr7CvBqLfJwPfvcnvdR7GXC4Cb2qL2da",
  "key27": "3Tv11YauoqnkqM9Y6SfjGYjZvZo1L97b6DWhTXLetwXrYxVMnJM3DhsVNZtiDWPrGwhEsx22GsrR3rH5eHmMzMEU",
  "key28": "48USBRMmGhaK7xPadnqtt5oXuhFEyDcacF7YutT1KBiz5zXJQqwh628fJDWqJTRzqPKktRozRDjkA732ayCdrdfc"
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
