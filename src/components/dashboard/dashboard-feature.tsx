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
    "Jn2VjGKQ1g4cugERxiR8s1rJQR33WJF7nmbFUiqp8FJkgFk64NSoGBYhgUtQ2U6chngu7G3MqrfxDrVpxFpt6cV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67MT7nfN9tT5osAq6oxFQo6emg8coEAEYY3Tqs3sq5p4jqf5k4J4B3RCPTyLrkyp8moKafXLGKX35AQugAbiCnFt",
  "key1": "cosWD613CxEzuNtrj9Bwmqqcf5bv54Wg8rvdDuHf78vF2pvPmdj2gszCTgi45w91yR2giMY59DArzmDEb2MU29W",
  "key2": "4UyYZ8vcPSNo4W46pDrnWTZgBX1kxjXie9YXbQ68ZYsPVNCA9WkYoeMfVU5Q4ZiQbgTd71axgXbMEFZbXNLHHEkg",
  "key3": "4a56KPoLukm49ddsMSx5gG3vRFDFkg9xw7PyhbDAWspi7ghFmoSqchDoaDEfLpA4AVwx4UeA8WnprwmVWH588ua6",
  "key4": "45pic51FDdPaaSqHc3N9NVd5EwQRChazxcP3pCuPxcGvYqDUiEUt1bHerd5ibM5GeEas9yu85NBpr59RfrJnba7t",
  "key5": "4dnYFt7fjV6WGgQwuA3wKJow8kjeP4c4mYQhSKiodh7DN1BEp1WuFgpeax3bChjMw4u1DsMMW9v1ZUVRQCrQ2oG3",
  "key6": "5bkPpRWaoq6gzBunGxyVChdE3URCcSsubtvrzG2XrfAtB9CPHjcGu9EcyeHFPMgmCzNAWeRBvuCXHXqRLp38EdVg",
  "key7": "3uw7au8v74HcBqDwkzFzDnQ5Yob6EZCDf9foC5y2qaxZMuSq9HsjLhRh13TcUcogYj2jdEbmCmRoJVYZ2SAAoq4Q",
  "key8": "4DLnnispED2BRwgiSrC8wFqvrxoNXMFpi3jRFyyv68f6wGFGxp73TAH9LXNxxSy58bdyyPWdZq8Ct34Qtq8d6X75",
  "key9": "2Qiq5nau41gA5CiKEbY7B6DXkR9xkp5sEJJwkvsdqD6rhk1hHVBa6kt3MY4BKgvjzcSWVCcza7m36aC3EeX2gN25",
  "key10": "43AAaDUpxRjis79XeLkeeKvEd4EAfRuMycKgPX8BaMjauBxWLLnJyoiW66v1RC2kB3EWwMCtYKtG6MoowUV7aa33",
  "key11": "Wj1FX8c7HbJrmiZzSkrB4P6ecPUAJPGMrN14vp6ZxvF1ACYVcCBzTqPzGDt9ViYGkFF3eDNRfs6oXeSUarcS2xh",
  "key12": "4DcyRX6VTkQyvjHLV14Ph86BuMUjEp728gzPPcw6HqQuoC5J6KXvCTqXaE2Bne8U42f8a3vBACsCyyhe3NYaxp6p",
  "key13": "34H3dCZgUeNwTeeNaSAFFtDL2dKNqvBHLpoDD2jgHDo9agZo1ub6b99veCndXEc8cX3Z87axyE52uEqZg2caWPuM",
  "key14": "2yT6k7W1r1aVuxHZFAT2q71jbzW3uZLdAV492sb7Wgn9s4mD3zzaL9EcFgPeiDB3fzT7aUcjqJ9Y6NA1jM8bbq2C",
  "key15": "3vbb8zQ6y9pnEKVEqqtWMRysezvAKTa6PusMio4utJ3rNnYrmtz7cWKm6uE8fdhU3DHKfz1AFv7Dc4eacwQtWQfB",
  "key16": "2pNU1vtKK9iisket1GnWLsdQ52XKuwMajnpDXjhQdvGEdLwQfxqq28gfQ6KzLKeS6DfCWLfoCHYkc8DF8rFUtV5Y",
  "key17": "AjsAjUk1S5x1x8eA8ejZ19GuTticRDsdBXWq7QVvrpnx2zTaeairJdhkTP7w3EyoZDq8AhfDXMJKBrwt6GcpUCC",
  "key18": "4ipi7VrYpXpviJbrHJhhdczsyqX6HvWnjY1e2qnHkfEa3eKVERVa6YbYrMqSwjx2HJTAGtnaCkVRkfMWt7C1Lbzz",
  "key19": "3dXxv1jzAfWMquj9kHNJKtPM7P1ios36RK4GJ2seGy2ekAJFCZMN3eP3eDUd9oW3Qgzt5uJdsYdvru2pwr4Fsr3V",
  "key20": "1Ve5WG5KJndRRkRaQTXHvfp69s9Jcpmy9Gcb7ZHLNWY4koRz18xvYkM55biWvZ8wcA8QispHYac1KwaagcPPUyQ",
  "key21": "4CHxQW25FDC3HY9SEcrSzxW4XMwHimNUARr9fEwDBVvNhL5j8ZjJDx4JTvvVMvo7ffSHhzzn9xkk6nzDa34NWG15",
  "key22": "2Vw2ypTG1B1DoCUtVwS9Fwop93vaoeXrBW2hTQFb4YLFExUPJnBHvMG6VNDgymSpHVFqngtLgccMFNbPSubAz1Df",
  "key23": "4xFEXKcfziZKYtxyiwKZJM166eYwwTro8p7YFmQANCuPC9w3MmgWr2w847hpWn2SsW5WTzbc33v4ZNZhkaxuatqU",
  "key24": "5Er9UujG5YU8oxjpvECuU9wn9sj7dnVRDUmTgPke7o2hWZfgpWh83t1qD4o2JPaf436MiVX3jhAPDe3L1LVnfMFh",
  "key25": "2VCEz48PX1AWsJakKkqKFngArbRV7kRZzenBpEfRCChHbwP8wJxz64Xtv29Sns68r5wozn9zQLsJtwuXWzst9XCz",
  "key26": "5K2dHgKGWvKdefkAhvgjE12icukte3Am6EjciPCuTDnCYXag1xghEZj642DHW85RfKp6WXh5nEavFNSTWKriSPN3",
  "key27": "3Lkt2fcYGwg1G7njc8RdSrWT4h7PFAZ9qhSVMtfboYniAnjNwmZM985ugjDS2MPeY1Nfc8dAyJurLR9qS4TsXRMA",
  "key28": "5RUPVJVzMrJrFPexyUyBXXJdrA2LNybAQqBCdWzu3m9ayruHK5biVJAfES5RwXNrGh1hBfBTkdsSTmd5wN3mrwfu",
  "key29": "4wjhbvF8d83wGeH8ZTksaL1rnkNTJ7wPsaEAMsVFkr8FMsH8qWoziVvcdXCNXvqXLeHpKd3BgvgXCa1Eu3Y7ytSZ",
  "key30": "2mQSB2FJxVk65URLHcXXPB4xEs12dJpozyG5QGZRW1DxyGg3bBS2Qo72hGHHbBHcJyQwNa1dmxEedTEcLU7NqXqK",
  "key31": "5bwBxK5MTpwL8vDzyLuzznwNgwgM9fG4JxmaeG95kqEQFzqNRAZHT5ddZ5s6UZ79mnwbZrVpwbkCMKhMyyCBXSky",
  "key32": "5Uy7MqEAYDcrLUa858htqGoa5YTLf9okLig3soDSzg4S4c99DAZnfrCLyJm1ZrRd9c9e55Rpv5ngv2WwFeCdi9oq",
  "key33": "Chp8b3LgvJ34vrk8ae3tyBeSBuH2LNMKSAgRengevtKqoqce2myRgvVCeTVHXFQknMBkzqBEHsnQDRkiAzt33iR",
  "key34": "5JaJD7g2WUss8UjorvaT5DR1SPw8hmTFAFoGJn1h8Bgcgp59JE8KxD6sxZNN6yWbmmZ6D3UrEcdWHqLw64sc15VA",
  "key35": "4UHnsXUZL5oz7E8zPtTnHqNrzaVH9mLT6jYFyAXqiztCUo4MFWpwLCvzy84D4Y33kcMiZTL3AzAMe5298cJMdEiE",
  "key36": "39KC9v7G5cuY2KfiU4E9EEtZEAzS1FqJthdd8ntEpCQBXycsLBQ1NjdKXURE7LXByyJdnCvtpuPso57tBNHy8kXs",
  "key37": "3nZkgG7aKdF8PC4cFNevs8neMao41CbuiBKvVhnkCTCTZVUJXtLCbXMteVpoQYEuUrUPsJbExJxA1m3yNdiVp1Ut",
  "key38": "3VVTW5NXzkxdoasY3WafztxwdCFVoY9d2G8A9aWzQspkUXsxVXYDJmhoL2P57xRSZK2BEoPKTFSVNXYkzw951sLd",
  "key39": "weESHnKsXtHEAtG5Gdt3EHXpdfSSmqnRxyciM62F8F2kGrtoyD2PG6MumydvmwonuDx5QtSToLaNXX4ySXnzewV",
  "key40": "4RrEvjYsvQ81VcCHBLCpaWrkxVefTCzJPU1kn9VZFXDH9LZG9HKp64uPHB1zi8w4fiwf9U3NcVB4C7vkL4BU1beH",
  "key41": "2v8pz91V7mh16WoQE56yacobjVAtZw7Wjog6ZpKEtgYSThEFBVs8rsDxFbA1Gsr3w4i1KBmSVoh2qUY3t7TzqNuC",
  "key42": "3fNU73ecxrzTwFin8yvBTz3cwifUmBvkEWj4DpmLozBGMWFWy5pZ69KxPBBgxtQHif5XCfkN6Yqm2f7FAjcmWXpk",
  "key43": "5uWUnwjvz9Ycye1ZyyL1LYVGUPQKMB4WSpaSF8Gq5s7r4BSNrdd1mRkLmYHoLfMRRdtJuMRFA78btVi2d3KSmpUi",
  "key44": "3Bqkw73sJ4BCtkRsbUzNSGXQYHJJKb1amgRwWMaz9EzvU7rWr8ZMQjGNuTAh8EqjofuCYFoi23ztDHRAexnQFV9S",
  "key45": "5cmJkqZLtSYsLpcnXk85toxgrpS7NMLmKxpWiNjHo3WmGfGmeWVa7ewFoHcbRB6jCAyM9etiVG5P1wSWfQz3usFo",
  "key46": "Qwx2nZ4nP1GitZzYNdCR8DASCVgFDdQQywRxJPm6QoZSyNWSdUjhJSj3ZsPbz5WbeFY8EwXyUPPHinEHEfNf6TR"
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
