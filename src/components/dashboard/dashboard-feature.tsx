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
    "4AtuLgEVSBoA3BLdfkFUa1sHE6x4878LwgkJ7FnaKpG4CN5tH7p3ouPSMsA5BXEqx1NrZnWvHBtcPaZxQNLCedc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3om6jMc3qLvTef5Kr9byipr5uTtbfsL7NYWZKEGW2SGa6pFj1nraihUJgdxu3KXnJjeykJcvZCpjW2Z3LqCRZYfD",
  "key1": "2EeQ9YEaN3Vj93AjnduNwpyaKeRxpiNw6DEr1AjGLwibArSdQTVPKJGQhCRixfzzJxAYNj92YsPtjKMA3AKSPp8U",
  "key2": "2YiSoFFFwaf85AZf1PHLuGyBP22umzVmX8udhV9cTeMjSr5bA5zzCJXdBAGtLKq16yFWMgN4dF3hJQ5qZET6CxHS",
  "key3": "bd97YxSzWCLtR3htqWqnFsV9MnmvbpdGharnwhZyPaZatBtko8xLieSNp2CBWDBi2oChqwUxwxhuDb24DzCqrnq",
  "key4": "57hkV6dhjT8dzZGReUbhmKX2DCrhL8x1c9axca4Xx6SgBVgLkKteKT6FM8F1fkCJVV768TbCZeQDJp9f4tgPLypn",
  "key5": "Bf6JaqtqJhALNWzJTUqyQpHcfsKJC7n4VyJdrmGcwT7iQvoJKqMJqeYSjaVAY74ySmHYeLiZeTjZonZ7paKpj5E",
  "key6": "3iuMicV5PvAW9zxmDeiTd44AU926g3gFE3DB7eJytTLJdard68n6Z9KM8oZoVfTThLKGkYamnagmfP4AgDcDEM2z",
  "key7": "3CxtDVkiMYpn7YHf3cVyHWj3RK4itVcHYBwDfhUJuKpNSka7AALekEcJFwnZ1mnhqiZfFRz75x8vK6dwkJPUsLfw",
  "key8": "4RH6n3aeBQpqB6BjqBrvwuzTMcL81iFtD256YuorNaBLfa3mUVY4Kvy1zYtk1ZyqsunNMiTEAwLZzHtWkGKywjVy",
  "key9": "AFn3cnWvsi64sVQmimnfKskmzoRC687XVKXgBZypr38oM2Puy1goz4EuqW9hDTTDkG6RASpQNaGjD28t8WLWnW5",
  "key10": "45ZNAVbL4mrzE6k6hFNNpHcTYqvRjFBPGDtPJnMBuWTNFRSRtPLr5SCGYuPJKhGaqRGCnurQuucuoMYcubcVtD9r",
  "key11": "1UYmBz4GdKb9fkGphW8s9e2CahJiaHn2wBrZSnWQrRAk4uffXDYH96HUCWbRnhtKxrmwaKjd4sRJh5GxmTGtbMx",
  "key12": "51K1nY753wzsFdaMjp4KxgkBhFURPbFJEbgyWmpvDtACehJTL76GAvJAwcoJts1dw4dBvKAv5j64YdBR78oxwv3M",
  "key13": "3XypiyxBPFgcJJg9H4RHFgHeDzFN9XXjCZa65WBFBMUuEGmCVdBzY5PoCqbd95y3qs2q9Sd5gAhPcvgdpKXDBJSt",
  "key14": "5gusn9Jjgp6pEo7bu5A531emYNBsDCYrwm5mi7iTrVufmcxNB9ADhB5EH5DLeH6ZgHqFHNtaAxXDsvcCdJBCXxyn",
  "key15": "67D2wzaXzTNRo1TUZmsUsEYdL3wqkwjXqFk3b3fAPzAQ2UKxNXgKMpCtLrNuEaKE3e2EEax9svQrk7PaqYDvCC97",
  "key16": "3YQZoF47Dh4skH1cXe9PUb99yA4f5pu49G4NU7jbqwz3duJx9qE1ThhqSD67cLWwnersEVopAHKm89oHD2p2mfq9",
  "key17": "58tgMFPtRPenguk7QAWyXGPjCKWohsGT8mMHFEMEtX5hTMotTnXqRHL1fktQWTT5KcoDJSSZyxpGwsmzi8Wi51sd",
  "key18": "4oDba9h7cEe1fWwFaMoQmwQdayB5E185yMM1Ly9sjLvRVCdHRqqUSLgBJLR14mrskFeUhqvZeZsD6c2dMWUMB9JA",
  "key19": "3FFUCZqqkR96rTN8tc4brApEjNpqEPNQJNKJh7kV3PRps4j8sjHPMGbYyGmbhuuXZJLxLpqcMFnqwECawbzAYoJS",
  "key20": "4xdAzYBD9LQhEHyVCfXzKdrMNveCqGUKWp7QQ2Hy2XQTs61NXi2msqhBPucTWGn23GvePXwWmxfbPZ5seoj1AcD8",
  "key21": "4hFXZ9pPdxMALY2u6Y4P5M25i6ckgcnLBdUeG3KZX8JvZ96R28UBp7iixJLHxZtw2NzEfpeGnp2C7XwxCgkPfJL8",
  "key22": "XqGBLos58qAQTo7Ezapo39zQCKuYDFM1xQXmTGTmekiLYFYi1XzGmrYzLBYQvPVUzJraMqXiAN5QotXqkhupyfZ",
  "key23": "2ceNmaY3jRU4RohRTZfxYdq8cuHzybsjepzUzh1vuwUeP7go9MNkmNKF31RDwH1Jq7zArhFwiAQtZSsLzZW8pDNP",
  "key24": "3iD8PKNtYMS17daaoLDjbBPxWvd5JnBQeAJjhQ3PAZ8c68J72wVkXrADJVmUFffLCEAn4V8kuieyuUbFY9LD8qaW"
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
