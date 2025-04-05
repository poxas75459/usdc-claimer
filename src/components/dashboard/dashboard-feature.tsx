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
    "4krytr5eKJNws93end2yHe1ag5jn8rxzRWQMpBbUKWTy5bk9ZURCaJRBRkX2VFaoDjP8GXDcrXDkp4RBNT44qYux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t4ohQ435BA9YvLTkgQvjtR61mUA9JtWZrJGptTsoE6hQ8kpx6MgUZzbvgpns7ZoZxScawmDMy4oH6RaJ1V6etRf",
  "key1": "67NLnsDiZtoAze4zLRqBCEdEPkjew936HU6exqyAk1udcFmX6uTEfYPseEGcN2u5xZK5gmXm56wD2FsNr2E1A7e9",
  "key2": "4NCcEvfW1HsrvdghNkZkgS95yWV7zjvWuz1gA9aciGpjRvgcijyA2Wu3UrSFipb47oBmPccpMNpgBbJ7Ze5qzB17",
  "key3": "31AuF6LEr2mB6eknhxekLVwJnhpbQh7G4CpX9FZhiH8CnRBAQCe9Mw54wuF4vVqN17GEn9K1biWGHjJ98VBmFe6a",
  "key4": "2k3Zj675zBveaEoFbVo3qrRBPHhdhgMgkohmSbKtHXDFvAv5EQ7SPuVE88PY4u9wJTzxKwFuvk8oYt2HdebTptcq",
  "key5": "2CMZbnJUffXHptiaxKLh3pG9twr4QWSnjYEAZBqo3xEensmZ2GbsXqcKFBYyxFmFuvTMfD96HSwj7jFjvURY35Up",
  "key6": "2AU9NdZPLUYKYr2dXmdmAG6UtGy74SfoixP1bcnu7Dh1hnaKvV9d316SAxLQqgWZZfvpya6VZYL479VLbUGzQCPu",
  "key7": "4PqjYxcQxak7UDPjcs9j7kf2ZuvoBU1dW5JBBQyM4s619S3qEMz9vBWgtg8do3C3gA7FKk1ohUmAySvGs7HCCH4",
  "key8": "5whbcAxvzSVHynzELG5kEUTAcXB6kBRCeG1a4jpdVG2dGYa19XtGyZyt59Fy7hXSMT2iuyE3LtZLdVqK5tY1HS87",
  "key9": "dt8VQbzczBwdji3NzRuvKpoLxpjVzJZ1nAEaRRv2jUXLKMwZVeSLVpvpe5uYWCnbjuMvdMNsNeEG5WRMmE7mgdE",
  "key10": "5myJZf9Ztd84kMfCiY87p8GQpqKGP9Q3FjGNQ12eooUswghCbimsKCMKeAkEdiwqR5KB5th2fkpBxospvxn5Zw5w",
  "key11": "4Pq9h6543BWVK7tLSzAd3kTdg5Ff3e2KjWm1TA1te4rJEN3PyB5Fex7eBeJcojTRNvRGYFY1PRMV6JVAYTwi9S5M",
  "key12": "45zjHfhiHDqX76jjLbuVMQinQENzzFSc819XH2aa23A9TeRN4k94VYtyfdSopJNwHrRDJiWZgctmNMG3shV3usyA",
  "key13": "4up2h6iWu4rLZNWLhCCjRujYc6ZWRyVXSjzmwmbHbPpno2apxMJwvSg4FZ2BUjh4LsM3jQpJaefFPcwMSdkBiwbp",
  "key14": "2yNzj6J6ztaEY9Qj7chQKrH3LqS88uQ5QyYME3tMKPmKMttpirf5KmubrUSzb4BRPZdwJS6FRY4UTGqzkG1fcCtY",
  "key15": "3S8puvQLSAbNorPHA6ZMkSFXi1RzyCXFJjJCwhA1cDovVGkadhtYBFZJJKLjDcg5jVW5xEhfW2cNaeT4fvd6tNh9",
  "key16": "5Qv2cteueKDvLswYmATnahYvTPveBbcspMvs4H6bRu8Lafh6qDWcCyAAuLHpBKHxHUwQJ7Mgy5Y8fpfn125EDPzj",
  "key17": "AoudGHtvC3R2ia4m7cY4manWb29wMDdMMaCoMTuxHeEB9PBQUig4HnqCm1xV7Z3rzrWv5hEnccVQKrpLT5FnfN1",
  "key18": "4TaqW88k1t5sK6jo7iKvj8nz1yUFxgLK47hVP4CVNWi2dB4SqWAFkUoBT2kb4pfqHJkXEhy7yDhaMk6CwbSyLDHb",
  "key19": "3uz9zqXJTDyR8iKgKbgGHVtQNxYbKxXkdHLrWEnWkRvnX1KUco5499DhiniJ2V52XJimz935cnLy8buDk5n4mtEB",
  "key20": "5HdBQTwfLPhUAtEf1Rz4FYrdukmDad3tRNXuiuTLu5JN5aVLGH5EwdYAbcbhFEHDHJNm5XAtVi7CnP7D3oLVtJ9B",
  "key21": "66tZbjjTajduyhHszUpE8BEukaSBEvsZH94e86V8DhhXBeDiKoXwSmwaSwepQZy4tXdZe4BYgV37ZbXoYcbpt3k7",
  "key22": "3vDiZ2nPkVsKZ35MV7JqATMhXpgEZeYSNQpJy9NXDx4dX21QNVTDRop2P9tCHhcDosprZvPDPg8htUzoh1q3eues",
  "key23": "4gKgvbK4W38LxnVmHBiLqW9yuW1G5Q7Gm8MiRV94iFpuK993nJ6dkd3yg84quJDq9d2gDpw3BQbfvPfk927za1yE",
  "key24": "3e2s9CoxkewnLJKXf44TEvLoZhjbQkbdySyEUmNUBwhRsGjeKdvJ7u19KKWSJNbpz2tQwPLesAZd7DPQ7TjMNW6b",
  "key25": "4vRK9PALDAP65Xe1wwB4CrMRzCWWpnkcex3HWBL4VwWQDYKpLXnPgMvbkLpgvJTxuxEwUZ4cPg5n2Xendq1fb8gZ",
  "key26": "3YUHCPgGafJ2uFgTKbntBrUWLaFnpM89ryghKbqzp5fHaseinuhHaxuqTQWhGX4bnsAMB947HsCUhSJrzZmfjma9",
  "key27": "65xR8tuTikkPwpmq4ZrBJtVvoPcCUabmU5Mk3QhxrUtgD5UBmMnFxpkKjxELT4vCNFL5FH1Pwzjk79QZZ71Lnz7N",
  "key28": "4tTaQmuPF7x9SPpH9qcxPjLLyiNKmn9uZXju5KyNA6EzsGc7N2j6CRiKKXPYUwp7Qm5tDt8oMvMu7eLAUUo8VMRG",
  "key29": "4uYiM1kCa4mreGo3bg6MSbFTBnnRSx3oQ3RtZU8GTjAhvDukhv4hWauSfaLzG8gegCeK4H4s7Ac5AYUbzSZmrFsx",
  "key30": "5AjNtRWNMNuN2FzcAwrf4XFF7oNu1ibxrsH3wxrj5Afy7jcFhfxM2yx3CT2pkENcUwxM3ZyG5siXWf49qoFe7SwU",
  "key31": "A7hDTq1FQmGnLnAYAMrfYJLZpSuwUQXm7AJXXcSEAtGVQKLFgkkrjrMTde7W2sGo7nMBF8kiUfBNyoh5YeNQCyD",
  "key32": "5Jqd6u8Fo3tYqkVe1mfTWU4Z7RGPJDEYYyHUpemB3Amunib4ATuczvsTRw7FCY9HE4Dc13pizhf6crs3tZJMPivq",
  "key33": "4svseCsQE5yKGsx7M9sp6yKzGxJ15cg4iTeAMrJorfwHZ9ezkmfKTMeTNG29Xja45EjmJpsaHoWCEQkcFNwXsWgR",
  "key34": "4S4LPHWdf3oQmQzw91Hb6Gy8AhdEs3J6yws2DATMt36PZMLFiX3w1bAhPX3mM2dcYMUHkT8qsb5GwMrG8PeEVqje",
  "key35": "PPnkpCBTaS6MTkjzJF614kk1DFoikc4uuVjzmvCbNzNmHDcsCg3G7XZcBr1HYxskzuQmimZTR9QvjPm4cshQht9",
  "key36": "2AJtVevXjjSqkR64WBHjspc1MZjxwqWX5ZePQu9cQGMhnfnzJbd6SAuaaa76RRDq9gY8ESy5ZzNTiAiLQdrsZxRh",
  "key37": "5aYrxvv2YPVYJkJPgh6oAoeeyZTDpXFbsn5ugxtW2jeULPkAT7CHLiaxDDLFUgRuDepk5mhLSibZ3eT5fS5r1Exm",
  "key38": "5E8VjfmDJ67prev7gth2TpAVhKrLMDHDddyea55MdP4F5SFvG9Y1y1u236PDYZXDqGXDaiGkZ3B4h3rsvBbhNjN5",
  "key39": "5GHf127DQuGMwtfU8F8gwTyMARBpcS16Pb8VEarXjqdgfgzisA3Mpw6338baNhvCPb6UBu5Uz7BVPoseT3kpeLVJ",
  "key40": "zALGAodFP3XRXDFAihGFXy4F6CpMa2gr4pxRT8mtP8Jouias5fPcg42UyThNUZVVPMhhHfVsbdUyr8S51DHJ2pg",
  "key41": "57qu3tAa3U5cmXV3cUMuCKeLU6wcsQuzsvhzDv5XvDFF8NcbhhcbN7ka9qN2BBUhwTBHjRTRtdBduHqCtseiiLYD",
  "key42": "3FBD6QouPAT1AVYhudR9S673dpb2PcaWAy1Qxv6CgKPwX2YfYKQtz3usF5dySjtxRgAuWN8oFe3cUk3eLuLu1qrD",
  "key43": "3duwyQGX5wt9bXSN6s4L2iKp9pnx8orumW39VRzYrmShHA7vLwb9s8g6CV4t5HrKJ9vMnDUrZVRzx7dd4ZHBqsoC",
  "key44": "4nmdhFyCHx9xgrKFwTSFjd7WtNkamDsatiC9hasRsU8bizudxkWpKnh2zrQ6yTTvmN6RutsUemoEqiW2AE8EwTKC",
  "key45": "eNULxK8ahrypWeyTejs7UwsZ5BHcQgWCdTmdWuGqsyjTAyZthMuwikLsqK1sW6nS61vmpKxmHf7HQ26Yc6DQTKK"
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
