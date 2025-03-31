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
    "5MAU6r6MMzAUv3uwTUj1StGtAtAfbe4oH3abjvsh9ou7kLXGGNJZbBDUogXZRj6wP7mRLqY3PggJ3aVTeUnsnc1f"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "JJkH1uYd2v2eExDjh8U5X4ScSrrENDVccaDJV56ZEA6UzJFrhQYVbwTVuRoRe7TJdqHaFKdkfyjVRyeDR5gGjvm",
  "decoyKey1": "yBRYW8e4L9pq7DHNHpQAmXWsbGmT8riV1cfcDnFRCBueWUdQuyDtGgd8KyhgqddXNdexDfxFbwpGn6HUSnWY71c",
  "decoyKey2": "2zaMYRKiMMYxpUdgZmSxPTDXQniZquNUGsQkZzJq6MYeFjvnYnXCgNt6JkkhbmT7qKE8wiXANtsqEjbWwbdUS8QW",
  "decoyKey3": "vgNCZdfomxahkuBJ6We35FHfqQE8TP9S8PVQuDAt9vwj8xpBJWmBWamWWAXD6kgc5sHxK1K9Mpk96GMkDpGYBqS",
  "decoyKey4": "5J9Yh2pXPW86pdqT8epWqezAHbYDNahTvz23L2At778neeuEbrWo1syaWoueT26ECpphsAQAQVfDJLkstysaxS4f",
  "decoyKey5": "31kreojFNxSUp8N6i8GB5tZ8Fvd3CAMdG5itSVuoVyY2E2rwaSekqcgswSyS15GBMQDmrnHcXScYvqXLwYsboAnB",
  "decoyKey6": "5kevNwDUwxGcxDkphoq5igayGgWwzyKxMKuZ8H1Y1tFqx8FkBrzV4TAk9xza2qfmWrVtuxrATxK9hC25izSVqPPY",
  "decoyKey7": "5xLsWimq963F2KnAu1DmUUwuNgxtURau8uohD4YeY2D35y5uLFUgFWwNEBR2KaRkXVWkDRdB96YXKXZj8mdsie2D",
  "decoyKey8": "4DyWNZ3qexFUdrV4WiW3gzZnFPtCUH8a5VoZNqqx4NVnTQUabnAA9djY5XewteTVyEYgebsMRgx1cPhS1tN2kfad",
  "decoyKey9": "3KSmctxkCs3zYyasSndGAVAzduFyaPM7iC7WaNpFS2G8okqdG8K7XNnddEDVt5orq8gjMAghq2V7Qk9jge8FY6rx",
  "decoyKey10": "4BM99DaaZ33JDrwTTXNeGwC6Q42ngKkMwZuKrkbST9UiYBQKWCmQiTEFyh4VRP9ysHn9xWDR1UChMreeKLjgjtLh",
  "decoyKey11": "5k6cgpUrE1Z6Ws1vC5tHfPbJJh9o3LKp45NxhABQyw47jubmMVGn6RwTiuQXnLpGjxi2eB6cmcMhqdZcAuM62zj6",
  "decoyKey12": "3VuwVezKNJUA1VDYrNhKj8rw3NRC6XvSM3kDWg6V8V4d3RhH2QunGjsa82uu1ZXCJvg3t94To5g1755XB5zHF4oE",
  "decoyKey13": "2AzJNmfX5iHeodAbvpyrmNBH2hinCtk1Uo7rNAHZxgSEWAPXa17gBPoLitQwB6QFKtXBMd5Yw79A1di27eyPSp1d",
  "decoyKey14": "6WrmeYSMxCVa8cBB9sCWryYh88fuwJVtPvCxBMjXeRimBhLHcSv4z2gAVd2kESZF8WQ7PC2RVzTkpd54AgzqjVY",
  "decoyKey15": "538aL4MPSpqppCdNQWVij9aRDRA7xsFC79JBSVGiyq4VMU2LZH6SBc6W5YSfgY5NDfQbVBxCp4x5DhGBr294xUah",
  "decoyKey16": "2giFXg4Lem4uFcQBJDzELphdfehXH9XnFrKuXcLK12bpphuosfWKV3pwdQLr8cAvmzv2m78QUFxiStJYnbuoURS6",
  "decoyKey17": "3qinx5vb3uo72GiXJT2R1p8JgNwWePEYA1UAkhQKAtpRizmrHU4S16Lp12CpuFNNo8Xfp656owPFdoBg7Fw3FYh9",
  "decoyKey18": "3SiFrN1KYZ1iA5pSAauc8Gnx4MjgJcfpDjjXeF6bgKQ61wby3ReeN2DmSVN8UuAZKQQt73RgNjqVK8J1zB9Ls5kB",
  "decoyKey19": "469Z5A9HLFULp3UKo5qBhWNHSQ9NTN8E2o9X6uUdHshzPeqTfJYU5twUEhpM6kgrAsf5XuEtHXZgLWdCuseHacai",
  "decoyKey20": "3HUXnfWzTYw4qDSYBVgisiFegBjESZbhqN3dAcjuiTWYN5tnbhpdaETjXpS6Aca6msH6b5sC13hPYx5EUjGwhums",
  "decoyKey21": "59hdavgFAatDSk4WmYsBBKg8L9jctefGRyamh3EYbVk5vN3gaynGCe1d9Nh8f74Jg4UMyKi3G1sLMSJjBuSokLf2",
  "decoyKey22": "eUK1XjTWBFGEvsXx21NaroiNnh6LfmPe4R4PjwEd8m3DhbnZzxvuCh8FsTqkK5Ep7UYcRfu5qWTyRRXbKbMuAgn",
  "decoyKey23": "3uFiKLSV4Bj3iYpY35xkbiyw4oJD2sZJEMQahQ3gjnQgcpFjqUB7R4HSVe8TbVdRFyAM83ZCCFNbP15VsLKY4LJE",
  "decoyKey24": "3PWf8c3ZmRowsWcUZXUhmSMCa1tDZE8sHD11brh1MaEKiiGjNCqNaujTFkZxQi7TK5SP7if78zY1EvvXGithh8oG",
  "decoyKey25": "pD7dTTERccujDZXFoRKfMkcvgT1c2obJgViCtJxmnFzmrDVME3QdCaMBwoNq1MnCo2BxhCBAAqg9fyaCyXvU9yE",
  "decoyKey26": "4DT9ny5BRZkPAYvThBkgFe42iSihUcPYUE5eU1cUtUotKTkLYhm6YGsjtFjNQJYo7E6w8MHRuzJZkPs1vqsx9fN3",
  "decoyKey27": "3YAYizxZ9ivPVvDkXo6JVFDa9MHc5n7CAZwULi8bG6dskfpq3kPaKTapJFMPmvpDEuTvUq6MjrfCP7rGAEMaHHwN",
  "decoyKey28": "dne7sc8VDqFF1BJpcq8yWowABN8KoYytWNNJ5mKtxzGhyFApTmL1gsy4ieu6tEejWExbuebx8Z6gUKHhjaT2mTo",
  "decoyKey29": "3YnhSq9nxfXdud948x4U6AKqxCrxPNLHixBnGivaKKRHEuUP1xZ92Wzwdix1Dgjrf235vJTB5jjD3PYeBsB79Q4W",
  "decoyKey30": "3jBcriYBZzdxwtnxfv2F8A6QTYQL2mhRnhHmmiXET67uee2eprxU6WPJYiTRcCD4tUdntTQTj2fJKcarZaJBnySi",
  "decoyKey31": "3UGcr6xekvjRkzZ7sKAJXKzmGDAUUyEYVPZ5CsDjKeFXzaB8BdSGiKwxVhmE5UJWvp9RNU3CdYoBL2m8W8zPo8H9",
  "decoyKey32": "3cj3AfhfoHg6LzghMNy6XMd1ekWawxF1kViQonQ1C6JdhMgUWp5C8Q8DUHJfHTza6vPJXXGpGrj36oMHBpe3ePCD",
  "decoyKey33": "2H5zUbqMaXWtZvFZFuz18AjaK8gCNqCN7KC4b4wTGdTkihTvXfZYJyDRyG4Uf9NQRtdGXHwgfwLkmLfBfRhzVTuJ",
  "decoyKey34": "3opZUvpP7CKWGCY9dPUtJDXfc5fxZsmsak3Zxqx9Nd4kioYCihuRuKTLEwYFvKSCoRFA6E6oYVNAT4uLCbZZxobE",
  "decoyKey35": "4RhY4Py2P7Sd1BhQwWk8JFcXpqudHtaeLoLqZ8WEjsTgMHtVuCG7a95hzypxaBiwkt3HhCtqb8K6RPGZMWegFoJg",
  "decoyKey36": "2H2naaK983ACK1hdHoc5LvXJxPHhefXxR1yJmNNTnCFcCi4kR9h6ipH6Uu91zpxoeXJ15c91o5G1xe2DQkVDEf9q",
  "decoyKey37": "3cG3VB9hkGtvTENQkeBzCnDbXbHKMZNugTYH7gmgn4Pwt3EE5cQPqrAdfL8M4KMoESyRJCipWpjkXtrsZtGLy8FP",
  "decoyKey38": "4unxh9oqnnMXuETGvd11fZMFqseLSSncHoGtPoNdHgDkQuu3pfuNt6Bk5fN3sPqVQQSQ5ePwKBfijTG9y1zCPpoa",
  "decoyKey39": "3Zr6SB2kd1Bv5KCHyb3gkuh9UxFUKniidBa6Cb6tFpfwcKUzWYcAuLH7WnK7baNSXRLYeYzVQFTjbDYsJfjrfejg",
  "decoyKey40": "62Qs4oMgrNUboXEam9TLNC7xuj1Y3cV2s3KmN27qA5bpJxJm8sB1PwSWPLpV5LJVLZSEvPTnYqKpkFCnm1YNSRsG",
  "decoyKey41": "2qmLrQJhuk7t5kqHaSYFqkTeiLhZsGFzbqZgeHKUBg7rLUF7gR4bprAiWYufQKkDaYeMacqSEEUPyvLhfUSWZQqH",
  "decoyKey42": "4MYGHMptR9tieHFkQDc1Ty678LJZYgz5QdgYcYkR31DxZV9g3bVxR4JCY4wF3YgCaByCpr7aEkTXp3n3cECLAXkY"
};
// DECOY_KEYS_END
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