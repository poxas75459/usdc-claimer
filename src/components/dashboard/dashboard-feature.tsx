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
    "44di8qgfqEMU7gaJAgU55z3BUHqj4GmWn6jR6cstUaAHx6F8cgN32Mh6QerCqEcH6dMkYETQy6YmJRNeTB5UYHy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hVnEL5Esh4AXNfFb7HhWg8Hdpv651BNdQ6av7bmZoHsFHQ2eiP53dVSNVR31m1oEH6vF1Ve3WB9Mub2hua9Dt3D",
  "key1": "4yP4WSPANDLSBbBX7UqmW2e6m3gsvcextskynsjuy6WbVSBH6kERWmimB9YyjcwBw8uBc5LE8dKgb2nvF2sMVBQM",
  "key2": "3EHCcbXrHpaKwfdHShBCRDoeDUGTAeJs8wzK3TcC6mqR6mutJB9jNJJX9ba61H3fYQoQEK8EvLy7QtgkpPktzM6K",
  "key3": "3m6pZAtQwzXWYgJD9ZUuGhGkEMDEcspXrVXHaEk2esN55zDnBiTDEKLgecTMDXBk1qqdx1h8U4cGqshLDHDEd7qu",
  "key4": "5tRwkuy8LckfbTUShCKgrQwzojeX4q7iJErfB1Jskf47UTLL4GFKGKQ2XpTZyjZWz5Zeq1M2c8nDJTHyMaCvaxRQ",
  "key5": "51FzgUmVyC7JAxFQjVBjjGYEm8GLZo1XBLBqSVpLTwtknm42Rhhmo486DHxBhoLEWAkBoUKRpydJPhCjtnexsaBs",
  "key6": "2rkXqDQUJhYH9eHrrDFhJbBKaDDeKZqPSoZBKUhVs1ki1E7VTAVpLmbvhrNhfpf3ndMgT6qAYTirZ6UtnAoG3UyL",
  "key7": "5k3FWzF5bN4NTs85dtbT7Lw4kvWfo1jDbcFwoRPALT32iBJU5mAy7r8Cv6CKk19SevyBkpGzUc99R4JeWyFrMwVB",
  "key8": "2CVRcCbL7XDjeE5aiJZpY5wfGgiL6aDuAMEimam5M3zbkw87QFAHM2PoFMVfhZryw8N3CiSFmmdWhX6T8tLqtY5D",
  "key9": "2jeEWJGLdNRqF2U1yneadNx8ZE7YeEQ3T2jGMAu41FyTVLSAYzDXsVCuu95ixPQ5CXZSjjYichMYh3n6Ahj8AYqp",
  "key10": "4aFYp8rTQStJsF5afSULsT1WTSWdpKUvfoWCjNq7C9BnH8HJSKkFEVsTTWwTzMgqazCsxLYiBnttCzL5yd34SRaU",
  "key11": "G5cV8nUzybog9paoP89yVqPtz5w3tqx3ueDqhaTopupPLNJRhgKRUSFJG2ft2dmUMDNwusPUmBycgwJuGHXZsZQ",
  "key12": "2vFuFpWgFeyC3NwR8nLzvUP5i5yuLLnrfpXYzxi6cSdgYmeSFTwUhkLsKagS49ZPKQQfXFhcwSJv7TtxMLkpJKEA",
  "key13": "2wacxFGDy8q9GPEw7N6E335AwjWdCPxnbi1HHTWVyvYn5DEVY7rwfVDev5fSz9XPQDLKAWxaTt2DDTKC9isB6TRH",
  "key14": "3ZyxkeAuMsDgmRTG6MHfEesxYHQuaPNcHPxNWQenZzV9eDRxSWrKY7ep8Uu5L9NGmtsyFXfo2ZNHrbsQhCQt8SRb",
  "key15": "2mbRWe5PoYi8hesaDpKc2gkCcqvqnGvBs2vVQToqkcfEvHWMugsPtGTuPvuXv83aox496kNN4uQEJe2DJAfEhfhN",
  "key16": "K2CVdiZ1wjttjSx7GXi97yaVHaseNr3NaZDBqEiiym2YhUQ3BMx2YFzAsNq67pVwvLS2dCCJZbRG8ByLZyyf2nv",
  "key17": "4Hvd2LgqEfpAYcJk3oGLDF63odADXwdgHamL95CpZHJyFWxx56Q1bFWYd8QssCam3JvTDuguasBSTHzoP8DkdyhZ",
  "key18": "3Z7fW3PUEF3Q19GhyyZH792mLWU4zJdk2ug1gWYPksyxRut5iKdGghF9eGTu1RraK7S2ULiXAjBKT8kwUoRVvpGX",
  "key19": "3D6hu6EWC8PLtKvv45aETsLpnGx1TAYmHCx538DvFBSh6dgexf4njaCLHm7rZWvZ7ME2tiYy11QKnMWWVtqEg3bp",
  "key20": "5uCYmZvYSSUGtpQihVhA3UrBpzniLuabyAUxSQdLqZ5ffbaLP5Cuw2jLUgyUsSBpGDJYKwWL6ejFn38wh26fry82",
  "key21": "5SUm2GG71RX6E2PZsqbwSV4a5kuL1HsX2CTGHjBTpNcJkpoKAS2EpE9u4CsC3cM3YqBanepbTRBkZPKZ45h1Lw2q",
  "key22": "2r69xSMmqGHqNdvLkNcn3JiFPEUSwUFeB5evPMrKm7oJuWeaB4cuxUjmLa3txq21bhaWxWWiyZkPQ7BMT6AX3rCh",
  "key23": "4uSE5kroghgWrcs6NLKXp4EowCEfWVoXhAwwKPxmsyhCHXoE5aJkrJHHSDwHR3yLHt5PdvaoYx4BVuZbErTFAnza",
  "key24": "XHiWkcCHMctoEYskbDpTD7cZfy8qgYiibUqdb55hvmXxz1oDGMJg7vXXSbEvvaNoLbjobTjmFSnKGF3g2d7gWeg",
  "key25": "4fXPTsiv1ZKvgmpSU56DdLK86nX4m9re8s43GRDW8rYhxiDGDCfX1AJyrCsee3Xrhn4PSmGxAJo1XqDQVXUYPmKf",
  "key26": "5Z9cRzTjjXR1JgyLAWg93zLK669S19rix9p7oHz4UcYLGJ6uVcjw2iK6hBn5SmqLBxBtgPxHevvUFLQfuQT7Gy3s",
  "key27": "jPq5ckNPpkrYiU97p26s1jp2hUZ1wwJ8kBTcgSHmXEckUZj1wR41CdhLrMN4QcYexfrBrSWSVMg9W8z7XruQhPt",
  "key28": "2zYQ1YB7L2738YixdDyDkkm7r9kVmQVsaEVRewjN8aDe91xKdpaEfTN9Swc4PTDcvGUJCCeZ953uNjnLMhCBCJXt",
  "key29": "4fuNRFpU3V12PL2Rdbg6t1x6oHSnuGZTXJviPifXtCQxfwcr4i3CTwk3nvpRh5TKAsYo3CyskM9chEngMmbHJHoD",
  "key30": "5KfymozJA8DnmezmHG9yfUAkWC3hM3Quux2c5PEGKSV4vDgBxPpBYK2YPqoiuNjZk3wZ584fuUsdzZQghC9z4HEG",
  "key31": "2ee1CpZBPu5dyntUEwiyvDNgxxzHsqGhvXq8RyYJnDqCQSeXBtdBfwb6pzfNhTvBb78cp2avrGR4PhTHHhFh22Vd",
  "key32": "64yRJ7WM6t5oDNecUayXTXB9d4F53pHPW3yEtWJKz8NDmp3Gscu2bUf1CALZPtvVbSfodyAxnj2uuFXh2NxnE3Eh",
  "key33": "5dUdrmineXw4t4N57unjEMpvfdo6uha2UVAD3hCVEC4rgsxXbp2QygXdpFs9zsxejDWpyFLwiYp93Tw1aqU5LaFq",
  "key34": "5ua6bCmiCmDAZLmwxVQJuHjZgd7ZQ8xDy8nq4JQ7gGWozAAoXo4pT7dmdrrfbPbhfYruC52Nhg3rCyh1RwR4BFAx",
  "key35": "5CiDEf3vMNWvXRxZtKfW2gmDLpEm3vXgTiPZeiecrACZCo83z1LkyBxmfvtEoYj5xebnvHXwMitfcT39jLRqyTDL",
  "key36": "2xHVKioAnX365VUTMDCCCP8RPWNybBNn863DqZF7eLqyEAtd44fJSg9iAaNWEySVs5cEh8Z2umD3RtdGrfdGFHSG",
  "key37": "5qbrsjTBzf3n9gdF8eAysrp8hP3CNJ2uuk7xE8qPWnaJqjfK5bMjmzpiS5j2Jn1F2tq1KAFY7AeTkWqdj9YXmMib",
  "key38": "2GUnPXuHTMviWcxGNzZ4yPt5RRh8gfmw3uXxt7mLJT8H51hp2Aeafx1cz9kBKHWV2ntvzjpDgrmGNMduaxaMYUx1",
  "key39": "3gJtNV6kgVsWViCV43rEFyjLZBwktWvTtZcPZzSBE7Z6NAcWgtr5ySYWg5V9T92MyJJh5XNTLHeoPKCZLh8yZL1k",
  "key40": "5LJCixTrVxVVxQN9SvGYoSck98PqVxcgTDzRsJfFx2uTHnEa4kZNYC6XrhxxFwK5JSbxvQuwai4VDDsskaTa21pY"
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
