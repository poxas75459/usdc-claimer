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
    "2BKPD9yyocQvFYWd7UxgKFw33UFXepnQ9i3VscuAsogGDqQjA1KpDnC6aUXeVF15auQCmavZcr4pVrHfjVf6FXrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fR5tYXDCZRhKp6JE21dFcn6qXtKBbcb7zEtfT7SQ7Bxb5cAzwqXGtUVSNZmX5fcHamWq3yYA2Lkf1LjRZ7zzQKS",
  "key1": "2DdidR8K53xsF4aXKjj41MzT4YtbAD2YcuFwr8XPcLGoRQFi16C6JDccXQtpBMjAG1SgEehKomi7f5PJwGPzzfWc",
  "key2": "4C6jqfsqXVwxVyXFqfz39AdvPTnD2qqUAyNAYvXTSFp84x6PL8PWonhqaEbZBoQVhv3V9SG3ibkVkE2CrUjMabCi",
  "key3": "s8Dnh5YUxoyUQCZkPnck9HaF3SLMGUo65LgqA1i2RbHYFeCCsVZhbHwcoMAVvWPSKpPqurswptQi7Vp7jC1scyq",
  "key4": "5pV4zVTyhqsSH1niizfLdN82uBWJtdKeJ9QtjMS4RH6FhDcWn9sQPcJckxEMvaKbAb1bsz4VrkBzFTFmk7TKDjyK",
  "key5": "2gEdu3jFmQMxaihZUsuF6qr3JYpvJmu8srC7Zp51CP7fryix1XBJiTsR1uL8KP7riLA39g66g2X1Ukns5m1bvtYY",
  "key6": "4qthBJMbjjHPs6XBNhL9vMN6YAYBWNYwMeYk5fTxVCbSqNALE9XKZi2LypdZVEK7mqLi6gSEDZxVkww6QToouAAr",
  "key7": "5UdSVK2qWqsXHPHPKij9kUgNxr4A4iek4fBwaAkS8DJMzFJtJ6jhWkneWUcW1pRAR3WfemuLG1fVNh8mQABL86a2",
  "key8": "48UN8Uq6aL87GRQbtAS9sXCedZxzs9GtJ9Gcnr6jAnGnqMpVR7UnToxbYhsj7e9Z2ByzgRpCcf4W7AVFkMzWLZtM",
  "key9": "5oAesycv4V6ZXJqxCcYvLGaKSzx5VhdmdXqTs7UdnnzoEgTZzSuqWsoBYYneiaDqTJsSVoNGdvdJBHrvW6a9Grxf",
  "key10": "5tk7vG8ZPkPkVfg5zs1hfxAENnT7D8PawjbqwViCyaZYXPMvFcyoishEcCFbQ2Q7Z9uAhhDJyJvm41c6TQd6Ze7B",
  "key11": "QycrkrGPP4bZcYNMqY8zdXRakKe31K3uH5HooowBxTSUg4i8B5DKZ8s5vhKCBgQSFUmuSHtpArxXprCQc7SxbfC",
  "key12": "5BuPiAkWwBD5adnN6roV9rETW8u7kRDDRRipfyAzSiwW4D54pjWy8AYxEVbsewgjKissh6qQyAJB4bRWdgMKyoPd",
  "key13": "zTNdW2muECtHgEGixEX4Qui7CPZpRKbfyxH6t4A73MC586jwUsNvqiDL5QDbujgXZ1dHCt7qj1xuEiYjgYp2dzU",
  "key14": "oQ7wQsUTfZJkxTgwr7iKiYLqNBMykaAGNuVigRR8RhXr1yVZUVdkj96FTawyJP2ZFmkVSbs2WEmHegHysavp6Lf",
  "key15": "976Bpn3FtbGH7HBUWCN9iuzXhLHjVkhCeUMRezkHnyKntYDKPswHRkphS4uUDtJGL7CUeN2jHzAUjyqoKnwH9Bf",
  "key16": "4hzTc2npY16cg5hkQ59UKMKdZbHCa7iXLxThbfGfdSsVjjXEtPd9ATemCYmfNVntyiPWDzuDyeG6tjgLMVYjSLhK",
  "key17": "GAB7zXqYhNcWBBLeYntCFJVTXnQ9aMySFAywGpSVuZjXPD3s27te7nKL77tqpppn99HmgDDoarSCgM6qYSuacv8",
  "key18": "3PdeBAn6FxFdwJAJzaotGGsHKnvAboncTAK16Hi8uYAgmqf9yazmXuQJdzfHZN5dSFxrML8CEnGht5snbidCH7VP",
  "key19": "xHq85TujX5iz6ucUqMCZBzbvhB2wrnqJjSitDK2xP1mgfVrBxLSS1FEuvHRMJtXYsQND4mnWu8sSRDrzAeT4FG7",
  "key20": "3odupsybaHmKs2Q3nUSeGDQtUsr319hRiS5BBLDCLdbNevedTCQRu1XDrMNo9L8cnks4cY4RHgtaVqCn3Y5GyPqP",
  "key21": "ezF2ayS8e3Gux6SJ8TjZEtTNXCPx5sW3kXEyVayp3eEjSHxTY2EjdoXHMGeYB2Yg1G42g8rM7MgpaWR6NzaUACu",
  "key22": "yyRTsyugbfW9SWXTMgTijhjk5DyNiegLBYX3PJhpArwJ2SNwcx5N5kx8cKXMUcvjTgUthM54u79bbv2r66NsU3U",
  "key23": "38mPsQNDadG6MjL7gz4ZXBbDF4a8byUfw9K1LY7orJ8p5szXSLAkVv9ej95E4TEagKeA5WpisdipGS3xu2AJq1vP",
  "key24": "mRMqenRcyiZYjCkZqjR1ZVm8dP3SdRiXwSeTXY4YvJoc3HHcjrA3EyASMUpTxgYNo4BZBBF1paLkLf4ZDpx6s6x",
  "key25": "4jYpWe7DRrZNx334gpMDyLxKnJ7sgsdfVjGqNtVZR6cBaDxSPksupKXDh3nRvupEmX6ix3ZHBAZoMU2uZJku63Jr",
  "key26": "5gDuEZPiXXkZd6v3gC5hYCdjK3qmduT44Nsn1xRZgdJx2P4rYzAyS48z2ZuELceeyACobH4N3wBpU3WGTYET8Qvr",
  "key27": "5986mmvJnejtJyZcdNPMeqFZaYfvbQ4qkBBrVCNxCnv7kvW8BLBcQLbwnfryLuPcbXgQ9Uz1EqR48HDHHspHh6Sq",
  "key28": "5n5pMqHy64dqMUN1TU3dR8gTfH84zuT8AgqW9pesPHDeeDxAVmRJzJWzdZcb6YtpTerxgDdMsTVYWxgVejqPyFEh",
  "key29": "5Qs8qEx9P5EssVLLYvsorJwyJLxB5zufFG4mF1JBkkiTE5Vd1ByGpuY3vwaoTd8r6LX9JzaoMhYW1A38hcPnGbKA",
  "key30": "4BmpBngK66UHi9QfAddXAPZ6fYk6hF3DDmF8WTxR6H4wuYJ2huucyHDN8F6Pqgt7uStmZPniCKuWKWrppk2tPxY1",
  "key31": "2K2vbfsv7oRVWgLiXc8nTPa9QANAiE6jNXWVLntMXKUnN74GUZ6Y3ZMzJatTj9LK9Kh1rNdDRJU3a82ESiPNuJTg",
  "key32": "NaT6E4daEUdeJUGWvpSfHRJmMgSfdx9oWZCYrP5jN8TwBL52A1h9thc2S7rahN72xdsXX4pZVCYojQwP5XmJ1MD",
  "key33": "5SZDhauGiyNdt5e8rH1rBgrgYBi1A5wngdwms9Fteai1TfddDMPY2YxDzV2oA633R3agYgjbtCCvjdnLf6ykP8S3",
  "key34": "oNKJuS38tHzsfdKydsM7KavkzaujSr1zfmzcecVAz52tb1TH5F5ZmH9CkXtgqQiQGKTuhXzvseoG87UVz4AThnA",
  "key35": "3cRnm4xrktECMTnn7iEq62ZD8ivQzKyiLEQpBeZxcmT8EUcNQSSW2Nmw6VP7PooST9G2ZqHtXgYBDpwbksiTQoDe",
  "key36": "5aqkaWdKesK8Eh6ApQF3U9TyEpSf1Cr2oUVzmAbiFrJPhqhQMHNfPpuKmbBrTZrnBpzHANcgQiNNpgguWNk84ZoX",
  "key37": "3ZRFCvyNgysJpG31Nr3fjNy1EYNrwnYRXYnjSN4Kx9FKvF2gUTL7fLfLyfWb7ywJQwN2NxvWmLmkQMMqgmzvYgRg",
  "key38": "5Ec1DJH745sPPU4ra2rxUmTzsYH9Xs8AEBcQMaPwB5afQGSLivChAboWFTWL6qN7ZMLmC5E23qUGYWGkzyrcL9Fi",
  "key39": "rRzwf2gDvDaLaReMCt87TMcpSPGv92QULT37WhUXqpzMJBB2DyntXfmFqaMUMeRbjryBuU3gGsYrXNxBoWcfFug",
  "key40": "3NTd7dAK595Ty9f71LcuUmNb1WBZNNnu5mLpNb71PEW1AmLCqNbDikHjqxVpMfQj14QZn4Nwf3BW1iryNxN1ww4t",
  "key41": "EDzJpJYkU5sq7rhA8uoCiw8aysMombVSLfJ4XEyVk3szBFaLZ7cw2pgLtnGt5trqU4kJmm6sQdbKX3VBDTfKhnd"
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
