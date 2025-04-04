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
    "283LHdvsfnoiUrKah53fJGLXaau8nQuTMwE6Yi5WoYfzTygTy3pJmYfd4CaL2vVwWLhdKu9DU6N6Xhpo2Sj6KN6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qkNoguiNuF1EnHuqRvM5w9VHYjGYa4QakiGC5YPfkN14YkZch4jxoLxu4RiKjUBvKvrphv1wtyXqFzLcFCUD2Xr",
  "key1": "4hefxc6VkAhFwumDmAhNXMUDWjt92meMCy865qFsK3tzD6MpNEL9D3Pi2uVEZVWCSqkcghmYqiZZm9jw7zybaqjM",
  "key2": "2qDtk5VpsFgUCuvNDqE43rUQT5dQrwiTd6tkCJbqF9StRFiqgYSMWwPLFkgL4L67HMmejCupZVUNHMTY6YenKPNz",
  "key3": "37MyZv1KKzoAkr95RdVcsQPa3cLbBzqtNKo78RwuJKZ4pdnwQF4LixQix93kx4WainAayft8uZcAyfwAFcAx4ozP",
  "key4": "LDTbRaFm4AVvG7cZVXDVkfnumhFoNNHUvjhWghdaj2NZEzHJ8oiqB2CT4VMfaC1wofXDueZxKHwgbBp6n7pnZAS",
  "key5": "4j1AeJ28hFiRJrRNbZE8F81zq7x8XJ2oD3Kjpm2g7tT8EYq97pfMN9faWNr9c2G9gFvTwJ2pLQKx7j8ueQ36ts1x",
  "key6": "4ZmnAuLFC9wR4vYEmpJfSFds7zq3pZjf5hBLgK8v5YCyhjaye5SpR7EyRFGy96p3mQXVhvd5LUauQ7NssB9knRNA",
  "key7": "oyeesYVxEWSzwYu6Wj3BrKcGZcm6Xx5bsBdvKXj8778YftKEndUANPRhdpNMtdbqGGPBoeoSkcvH4FADmW5EqbN",
  "key8": "3eFwzhMDgdbEJMWDJf6ta3k1x7bxLqJNuh1NvSQMYaK9TeX3zJN5bwUZFWJALyUsZ7hDczfN9a8yRNbJtNNwNxTo",
  "key9": "66TVYyqQ4GTU2fdRW8PZJnknovowF3swGwCweZ4vJHg7N3iBDVfD9oDDfin4c52JJhH8KQRtQMc643Yc6TEQZbRG",
  "key10": "p8xbdDt27h2WriMmS2Vg5mAehkth9TRWUCs36Zpq2qfoKykvnpYYB2AqFGyK1178rUL26npBozh1BZme9zLrxMp",
  "key11": "4kGb3ynPd6z5zcXNiPsa9df3a2n4tnhnP8UBFJ4ziASeaixfj7VHAZ5Bo5eR6jqaViL89SNppL3nepQk5w1LvibD",
  "key12": "3MZ32Xfx9rS2xenDwU33KNw38sDm4PVqwFFW8ytc3FZzPawZAJpL3Bena3Ha7ky3AMGLvgQmbGiDuxXnoS2FGwGX",
  "key13": "3zMsjmHnKuUwFjFi5XCeBcKhgcb4FuQCCNX2DRbSxD8CqT6CfF995w7aWvpu2oYgvLqMFVLN9q2x3rDKB16DKPVL",
  "key14": "2NLdR1XaYHev8DmgTgaJmUDBt4k2kEjohWXsZQMddFSuFTxABEecDro4kvnqtaShn7WcBxVfDRnuH65juVAgfQ54",
  "key15": "4rtp2AQJQ8fNbU6mL2z3b2x2P1ALZ2PmzAu17F9wDGyGTh3NfsEgUL2NwF8S4Eh98KiQYaYTzHSxyMo76zSwXQnk",
  "key16": "XJ7QW9sGjFBs4jjao1UUhzr2PeqeZhSg18kjUoys55HdzxauSBBoXoVGwb7kKDr4CYU5j9qgLBvtXmxC7eDbVpd",
  "key17": "1cT4NFZyTEPJNBkPwNrT5GtALiPjK2iSMLB2EbTKgpuax2dacpQf3oJZkoJmWH5X4B4usbLUu5aukiz7wBLbsVZ",
  "key18": "U49ZYNEyQ5ALHwYSEYXdW11Z4z9N3KVT1sXHZtC92zBsKhfRZP9CthRv95NCTBgxwzfd5g7zsrjrpEJvrHwD5XS",
  "key19": "3utcLkcqao8mZniqEK2Q1GStnGRh5ZCT15EGrPir7JUxUVaxEd3tVV32rXGVYz1vHVGBPVLJKVc3dUpGBjNYMc3R",
  "key20": "4MVzKY2xk5nk1BSN9aECLn8M1cQCC6DavVKREhRdbizRMvUBmb3Po7M1CKG7ciUr6pcpbSWi3HmRJD6iHXrrQMTj",
  "key21": "2ETLV1cFb21SSRbgpSJSS19UN8RAuEYiTLSxZqhpjmDkpqvUkdG1v5KDRE5Sck9XZvM374GYfpLaHpRSTSjNYLtP",
  "key22": "31d6yHj2AaVYWPvRxYstSLFYyRdT5fyXQRk3cS4F6TyZqvP61AaAGcTANSUmiBw7FfveZgA2m3Uyv96xdbP9s89H",
  "key23": "2phbZvyqanNVbPNgeQx78Sje59DWq9eMH8xwKVNRXZercrMi1ndgXANG3vhSfqPhEUVfpMCSoZLNwbtDCG8Edmho",
  "key24": "7eARnocFgmpEFbxTkd8QbYCHnUBcs1zZvzzbnFPFduWGyLD6MTZyZonRWj2d9RfsR8NAWZPZnpB1PkcbyLrX9ir",
  "key25": "4ETcvXJ2DHhhfwzY8AhWCrG1Fsf8i7EWU57QRjXn2Aezb54NfhZdDfQHtkqcZDatpAXDXZSmav4VfgYYvwnZztMD",
  "key26": "3hE1Yy3R7UupCbX7StaHMumKRbmKMEjcxTsnrkTTwPuAA8WTicg9rP32RWzpor7BkJJ96Pa1obxiFmz8LxFnjehk",
  "key27": "4pxoRn59txK3DGfUtPsdQKnNuUv887HA1EDhqT5Tww9r8ReobbpYdgJHxK1uryHbb9bP8SbarnDMBMAT3Xdqqz6P",
  "key28": "TXMhJXg6ssnCqydmam2oob75NJ7EG5852Ev7GD1XYShaRVYWVKgemaVTpAceM7GA1VMXxR2AzgupVMvVytB3Gnt",
  "key29": "2hnfkSoRjEjz4UWXcJGTwyCihzPBMTPQdZUAUnNfTNGW2VERV5kCmcLvPVWbZE23PNrSRnWtQP1RAeKwwe5QPdfL",
  "key30": "3NhXHLjS2oXM2jtmQhs6RbBiN3XzRguit1NucHmeDKY8mejJeDaoM38qduDQvBNZh9nu1Pn9JdY7HU2jwAmv8fEF"
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
