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
    "5q5KyxTSZTDbPU3a3SoKPbtygeUob6i5D2X2K6NVXUUmSPkzhnXtFmDQGrjPBN2C81G546NWBN4R8ra3HbtRt4zy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ox2fA2RwkYFUb8xaeQd51ScYtVr6krbkuRiUkMHGEnsGXvumYZEfgXbpUVfJ4w8paEwkLYXvtA1VpChmZx74iYk",
  "key1": "3r211L4p3uQHadHJRaVpHMbDx4w2U1ErDGa1KY9ZtAmnE5yQdqKUmauRd5SNFKX1r5eEND5gT59X1nF88R2yaMw1",
  "key2": "5kXvMTTaNYWr44reLc5NLCNditoLFSnS1XgwbdznjqTfSR4UL7JfsirYYbCtHHEbSjaNnY4BzETezwYNi8jecHVw",
  "key3": "TfkkeVtC6ZydW9LQSpQehiF6ARVUiaYbjX9t2haQdDX1Yotn5c9ZusjdBcCz7MH48zsnufWfSuMYpq34x2z5oZf",
  "key4": "4vNZqj3SXAyvCrY4Fhqbz6LEXQmCyJgWVYRxR6hGgS4VHb29XTz7wo8KHevTdPGJsRuL4zK9fZcDNqZUXTTZFh3D",
  "key5": "2dVjZwoGpTeDnGmSPPmpCVRB6uDKLAW642q2eZUZrDjA1p1qVEFfx6Lfv8ZE1esKk1Q87NtHiyTyhs9A1DoKoQoa",
  "key6": "SzMjKCBoLGR2CAKTDyzvH8r73wMqBXdkpc5cXNhZ5FsNbfG8EHN9vzVQeTETGiRYxssozGWYGZWjKUMbDKbHCHQ",
  "key7": "2xhS5mdEimYDQVyfhzdicg2oWtE1pjpDaSi7TjoL5EwDMgdQHMune5AkXxpyiosapWwuTQx6oy1g4GbqsKiGfref",
  "key8": "4EkxJYGfDkzK7tAzoQjPDLnoLEfj8h3e3sT8PLS3qrBYNF95HWSENbeqMWABCCq3XvbEbpiqEx2NjgoJ7fvcxRQp",
  "key9": "gPuyLBWowe6yeWW6JXzFiLDTQu1zKqbNPJDMTBhmrcUrzFs6esU5i2NUj7jsbLqjjJqEQMU1uxfQuSYeifvJBDU",
  "key10": "apsBftJNTVwd6kzBdrAH8pEzy6DrMNTJa5YiqSRUeYBb2QUvmSnuH6wCuUPornfGkPwYpMDQ6Qx1k6sTWFGhnC8",
  "key11": "ekywsD3BFmMRQbFmrn3UKFrFTntKN3TrUpZbcU8269iiBFtDY6LAQTBQy3FUoj358vfLaMFPdA9f9XVfh9E97QX",
  "key12": "2ZbmnaenUvpeZjW78BYNuDP9aVJqVeYAwpBeEREc6k4vd99Mxfv3ae4twfLKeJNTiyZafBLYaNCx4cUMMBTgchSo",
  "key13": "3UVcLiwyuDfyb8QTnSyPZvpuSjqMn67Hk88M12RNGBpsYf1sHSnjMSFF3AtqxaYJYQy6J1wU2NasYqCezX2YWCTU",
  "key14": "2ZSzxJLPbMC3G3yxu7Hi9b4uabu1NrnqRrdNPR3RLnQsMuYGGy3yn569CEtY73cm7FLrzeRWPiRo75dxqiST16zn",
  "key15": "63QHh97X2Ecxr926vd1A2qmrpoY5qzdFXSFSxGf8CMPQKf7uDaZHSbUceexKmqM5JBBSXAP7LvuGGe2Be2GMniMw",
  "key16": "3WioGeCVYNWF7p48UAR5AoG8ZyooaVDjvqZgDRubhbFQM9iRYc638ABRSMRjJ53SMhfoRwmUiWLpytd1V6Geeq83",
  "key17": "2XF2cQKA1hPnreMMZ2PDHNkjrsQeyTBMKtqNpgKgGJ5TtdjGe1h5kAzbDL7DaT7SzYwDeEskVrTon2sHesyf5sXp",
  "key18": "2crrfU8rB7y9UTsFf3VyZtTWBd8tThUFhRFMZqotK1GG6cWfqWHR9ypQ7y9CGQ23uHCfyVenUijhZFq3WNBEhC79",
  "key19": "4s5oB6bAuHAoebAZYA1JovAx2JLeXoMtE1kSwbLNkcs5KTk7epSAbgyXR7sZWSfyaUFdFvE32xhZV6xvw8vpC5Pg",
  "key20": "5ZVLajWEDLCfcvvis3h2A3Tuoh4KkTpmhsQ64msrbU56ERny19h9vBGPHX2giUCUPhuJZdPn9yHVq4UmzsxUFU57",
  "key21": "4P8oRGwrKWYaMYzwBELAAYA9Gwwk1rJHpFjSbDwXaBNSVKNqS27DYRq8AfP6S9G7mhX7Xcy9eqo8aR6HLLX6KhVP",
  "key22": "2UHwQzmoUrdibZpQdm5WC2jHJ86VJVhScea5hESHn93BBRoxxHqMLiM2hbmjS3QBM8a9DMLr2uu5cEcJATvPkrbT",
  "key23": "2Je64B2yft7GdjAcRwErCMHG7w9tv4XGG3uswimht1jUQse4roxNpFPfkAmrAzGujsscnhf717NxXNVf4j4YLrbj",
  "key24": "4xH49zXi6BeBRP7mL8NXtpUHL9VTDLoKbpg5WgjLJLMADHJoftPfM6eaTQKmjj9Pag5iLZrqqrNmaydzb5yTaQK1",
  "key25": "23vB4KRbgy51KkQR1Lxjf57dLWwwNcL6gBWujqHEi9cnFQomZkRuqLCCj1obgGtgrusufebxW8UPnA5ByHqFheSg",
  "key26": "4nYvYBUTJHjak53LRT3rsddUkJzde1taBgjCZkZZwu4vUrbfGYUEqMnFDukzJZAbhY2CRVMGb1AvobzdxD1CKMzf",
  "key27": "4z8PDWhNkzvcNoYkGVFUpoMsEyDQM82UVX2i46zdYcm3WLiKoy4HRZzv6dbnLoW59YR1R7YhD3TnqTe1pJfZbcE3",
  "key28": "4sVjAULuwWtBJViZddKDkvRT2vC7C9QgAjzTiKEbvqJByK895cDtQAQdu4z6C3L8SrZqbnqmrKhGEhBUa2Q4agcZ",
  "key29": "4s5bMQJipTodwkMuP8pKkbhGPwYCAGoSsLPDd63vx1ZZKz3NcYZkTnVtPEYadQaedjz9cu1kJWj3oCHzFFLaV5R",
  "key30": "2ZwBRACiBp5jDoARpXXpUnH5LKC1oiFKJjvN3fxjeYPUJa418GbpBVrpbWK4Vkfx417qHLbBqpQr3r8jFkFhdzHn",
  "key31": "2FTsr1YxpYrVQHu6LYWPkCXu7hMCAB3k7zMg8guyA3ufgxjp634P1CoMBBccD6q5CpBtwY54iM2uDCZhfGE6HT2i",
  "key32": "3uKcdaeKXdUjcYu29XVXT4SybBfoMvC32pyyNwD1kDUJQsxEQfZET8AJ7rKKaZUqsodoL9ve4WKRfpnEhAd1hvaz",
  "key33": "Bv2a8pNyGhGX23fkRt32KxVJQeB7WPZ5PAsm9QNkvwdnmHSvr3e8PnNj8ZcXbWEfzmvBUXfw7XnDwTW4YXzU6QE",
  "key34": "ZE9LwCdfxZdtXRhJ8qLM7GamhA8xWKVMxsxegHZx7x1eZzYaiRHKsAwRKXkoqzxUygPuYaPYfLx6uLnmkGqW3bM",
  "key35": "27xzbRqfPuvK1eyGSLm4auRfxjge9B2pvDzVpqng4vdYxQbPmdGbD18FoQibeRdTLJrQTaKpuGVVV59k1TM8gq2r",
  "key36": "3s7B6nufkKNMtgdRWJwoa9s8qiPvTptbcPmbK7Uxq7gyQT7eGvLS8b3ffgf8n4q6YwK3HLCYNUahr5wBmrnoUEe8",
  "key37": "qzHmyBtudyFL7SnxnRpEhEmMLuyZPWXXmQYAQkexGEqe5XNcWQCaAhEA3r14hZfidJUfBR4AyvfE77dYrimpcjP",
  "key38": "3QyPiXqt9RxSvB2BkseGNrjE6kzSP6Fv5i2etXK2oN2bByTNMuCi2LU2HdqQ28w31rQaB6DwwV24Znu1xXv34SPa",
  "key39": "4LyRPRPRMsJNAzoMwSEoj72LBFjYDh1jYy3nVQ9dRdDDipw4TBUtWB2fHiiRMJi7D34Mv6eENNzkwkxRE98EifYq",
  "key40": "3Ufp8WDKcU8haVJFET7X4KDzLbWEvQqTqA624q6e3LJDivDPCUsaY6J8Z4CR2Sfkt5LU9YCiAD9p7fPAQazYCb9C",
  "key41": "2v9V3N6Vqm7jPaRyLDVE6KQaJnLrxmjdqLhYMnVSUuYRNGMPgNtDiQyDVLuAHy7cAM9ebLgL9VkJG36nDBJbvRe6",
  "key42": "5oDwNknE3LX7Zrd33rssZ617DfDhAWnT3rEz9V7NSeNEYkY6z7AAumfyqVcj9K8iu27RBHyHTYneNxih7i3BuVV8",
  "key43": "3dD89JKRdBDn6Wxy7Lkgh6H92TfrbPm4mmEw7R4RzZYh2CGm76XswfGvfGP27jZ9mevPq6aG3Vg11MR9NgAtYdDu",
  "key44": "5aDhPuBimnhgDja56vPH1Ca9DLjU7xF4Fy4hvrpzVFMBrqKGFMw31AWL277aPFb2EzM8LehEeU27ru3aXuRYfwV3"
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
