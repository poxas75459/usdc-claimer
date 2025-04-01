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
    "5SifWNZGY1z9fcL7qHVTSPRLTZMGzefKgjzJ2x3LA5ZrjeGLMJJnNKMvmfWAeAtczy9meZzZKVinpTy8uoKHVPdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FjRz1hQ86xjbMaK1rQWtbqKiZjCK8LXpEwQznKBbLkpF4NQqewffr7PHRtReZjA23xXTXp5HU6YmF2bGfu1X1Cu",
  "key1": "vuhLJRhHn6uczFNGrDs57Vxv4V3DBUEPpG1hUAscVvqmJVoofPa58g4PocqDBMWx2fMFN1gnUbzBg3dY6HZsPK1",
  "key2": "4mm4afPCH4tDoZZpUXD7LiggL9nAuGnBYvsqfXsUprc7u1PgVqYda7FwkbQLWHLHgCc2657LvdV9UGBxMb7EkXZo",
  "key3": "2PuNzH1j2CSmWHf5RjPVryAF7bWy74x6ZBTT8ZCpyF494aPJKeEfkwk7RtW6J1GBmh9oYEHswkcYoPmaYityJwvS",
  "key4": "3CKaE65vkNd43Q2VbWucYHFCg88g1QUg2GUsWkig5MJcPUWCdQNVkL3UK8QggduTKpGsARuWfWEpga9RK2wRcKJc",
  "key5": "4ohPuFXvwGa9WrgX58CxnC6mH3MXNHsBJ3zMxATNNxUd1TYBypZeXZfPmzXXLNSP1LhPjUjqV2DjM7GaRyXUdeks",
  "key6": "5UBdFu6zVaNtY1ELqGDpP3YdNeonZnMrxgjnRZSDY118whe7vvk4RSeuHm8p5RrdZf7phxivuWkjeNWiyyBymFd4",
  "key7": "3BvyMgS1yqNMxVcqJQDc2Ubk2rcqi48h9Rk9jd6shJgSRdwTk6PnioNC544Mw4au1Mb9RTdyhsh5rtZkmDPW67LR",
  "key8": "4HHYtbEfirxuCggrNcPKCEJ7UrGM6LuNe6JAPoV1WD6hufWbFCqg6zBCQhBSyqFz7GpN2XrUCiyChuE2LvdCFRJt",
  "key9": "5TjCg9CSDGPQhp4EZDL1ex6JnwiPXn8Z1hUWrkNo84YCwtDNaf7Uvk5sKbu3rWXWC9rxgYNY8BTGHxXQLZMgKR54",
  "key10": "vpkAN7kZQSTuCcGFNMPARqKe1tSpBFj6khFFgdBKr1ujUsecxt3TWEdTZbLCaxSvdFkYR4Ef3865XZQfqsiiVzB",
  "key11": "t5DHp9isJLK5EbeMdeh3hEe9oUZzKM293NaMJcrj5UNRHWJPhKdxqDGB5EFz7dqCwUj7GmEGgApXe2DEFFyBMdH",
  "key12": "EMKKAcJEyCJdcTQbgVqFA62mQfnRxoY7LJ46XKwg11bUD1kR9EKi1hw4KY8wm2TiHFXXSyQFjJaDwRhWN4c1UdQ",
  "key13": "59YaXkqZLvScbVYc4iLwXeKiMqmyfonkaqun9Vn4F9Xs4Dyy5ydz2cApmtQdr5T2C1VoTyxYgctKA5MbE6ryhAac",
  "key14": "4hBmpwtcTEuw2uvhDMbQbftRRyyVu93SNT7tQF63wPGXLcm8DAQpTVh8hDtrTSsGiUddVXqecRnMMRwVau2dJU6r",
  "key15": "4YERghCbeFezfSJiJCr2trNzRAfJEZ7fx67p8tzN4fF2LCXS3roFBnmNgYhbfQtXs1B41Mthf8RKu3XEusSXxm89",
  "key16": "22i4S9wxAx2aUmfDAyF5NCwT1f4sym5E7rutNBBbU9qcPCEs8mvHdgMPPQ7Ro71QUjSQhY27Cn2grCmRZ3PAWpGZ",
  "key17": "3s41vKrTGUfokymABpMnGutQkGTzGSLAGxuEeqDQJZeC5v8vkhSqcyajLg2hnEzsns9Cuw9DeMfHDp9czF7GK2rX",
  "key18": "5b3jFadvcyRscfMGkq9V3M9K7W1Nx2jNxpT4A2KV94kx7bkmrBy5cXXpmtuwp4wJYcTEpUbBt9J18zEMbQX9SCrd",
  "key19": "25qKnryPY8JdAJxPbuciQoejrCS3VGySn3N4s3RK5bd4DGj18PjzaPZ8qdbmQm7NUyvnD9gw6rB1UrWwDxsXeXfH",
  "key20": "3orQz48MftyWMw5X8E42hbee5cpEDErvbngERGssCCQLgYq3HginmuymD1C5sf167jSWCoCLMv2ZSZcpmVCFSqwT",
  "key21": "2oDxznzb1ugrFyYtXcDhLZkuW5Ewfex9nwY6zsrWqXG89h74QBAkByohFgxMacG3re6UjE8rNcHo8pXRXyqzy88J",
  "key22": "38du4zAUP7gmtgDjWYy2REYix9FavU5UP89HVopdQxWhCoRZkiFK47qgGuTJ1XsYJnTMhQe2phydAiAmft63UZTF",
  "key23": "5RgP4xDRqHZcSPTEWHxV2KnCjpZKzRqtk1EwkCNJAsBqNHPDNqbT5xhwnGruBr3EEGA9aifSXAke7cYVbmLihxt6",
  "key24": "33Ba75Rp8MJcdZ5woCPAJKeDPZ6Wir9RdT22kR1Ro2N64qSEuySyYpGaVKNmFmL8pQZCq3ykd22Frgjs3q1QSU1F",
  "key25": "3neFLtAwYjWNLvyZPz3TroUJzdxMHjscdXJCCJxRZxugyV2oUgBXYqFBorLyTMV7wYZeq3mrMuNCot4easrJ2VFF",
  "key26": "51ynwoT5ZbyhyHAxzByWrsmAjnNYfYAjrwp8ZtyWS5hKnyNKanfaYoYKybtZUkaqwf5F1LZtESTut1YevxszdfJe",
  "key27": "4mQqD3AVegVQTxQa1kBzUWDrw1fSdjeFA3b2d63t2dQKCmcbNUTWcrYpQqKc4pisgTRsj6V4XDp9mUQRBvWiBZb7",
  "key28": "551zjBHDKiAsmPdgytfWQKws4kWP5rgpkDLkB5hcAAEs4gQdAFURrx2GZeHujdVtpm6CUtiTStt4EvLYesc9LC2N",
  "key29": "3JE5ykzxtT7bgoCptWf3M9Kq4cDSYZbyqAq4YiWPDZz8ECY7ed76nkccSb24EYdg8oJ6MX9vR11sXjkqPT1K2mYA",
  "key30": "5sf9fnJsFDnaK7nYoDan2hK6cxayXUtqsKobHCmtaTZdy3xUazZ9Ehrmhph6FfE2UoNXnkgoiEEqYk9QRtje9PkJ",
  "key31": "dMRzgU7F4LHZKCf4fVfczmYb7njjCuXgcjumpCHXdzqBimBc1PQ7zk5E75p9U5XuV3KTwu4Pdi8aNZPrvWJLdka",
  "key32": "424KTtoRJ5H2ah7SifJXMdu8Y6jSugF6h1sKdrafaZGunGKLrcJL8RsYT2Sdye6bxYgJRHGPC3jyYpTiNuvwbhyQ",
  "key33": "52ffd2yab7qkfYAYvNdx53pEPMtntNtxWS7QSNdstyGapDvzWdT1R7cVaq2MdKNGveLw1fGMSiUZAFhn44QtbBE2",
  "key34": "4beBtjGTjxRMkbkgPPSzukBkWtSunnNEz4A1oew9ANZWEfCw2xvFZVA923j9Ny8fTQaaVmcXd9woCrZzVQM7dsjS",
  "key35": "4DqpKrYZEEMHwb3onbZgj59eKCBsE8bBYzSS7NKoQQ7rs2FY84JJrxyxWBmBtjeSKGZ2RdSrijZ3eJa7Ctu5snLp",
  "key36": "2GvyagsNH6f1Db3vPHLBHhFjm3pXVAQ5Zr84q3DPvqCXsusu2ndkzWkBYmB3ihdPegqXusryJuuGPTkjCL1q3vpt",
  "key37": "32aiRwvqtwBZrMvFm5w5vMekgcTTc1TGtFsYfhqwYLzAxQCccLdufB2dkc44hmPjdN2uPPDThA2P4vb3tufEjms3",
  "key38": "5tL4zguAuNdZhzLXPAUFGDDpSFiFWfsKVFCxwg5yRDsHx4NhU28gnbUW9JfJEa3fFkjrmNaEW6qP7v1YDCghG1EE",
  "key39": "2SWLnBq3GvMDFe8epaZXeRmTrkJWB5fXCRFCCjGD4AQFfw5BLi2FBCoxypHNsL86EB1cxE3qi6csNpss8b8mD4Dz",
  "key40": "4mzyDctcQyfaYSLAvjG7hQYYaVhsRu8UbXVue6kZyf4Ut2pwpD8sV5AvanpRciNC67nyU3RpsKFWjynSQ3xypGqP",
  "key41": "5mAmWVwg8gsysTTrqtbAXogFEp7oKrqG1ZWDvN3nq8y5Kxb6yXfZPv87MgWdoeanDMaWPLpzdnb9jn4MJmWfhQEF",
  "key42": "5UnSEN26BU2Q2Cm917Xk7BveTM6R6eGputjcwaBv6ceERZoLot5FnfG7L4PsJoN7uWCKjfXVQyWNVMotF87BFuVj",
  "key43": "27f2FUuo1bqN1UveUEAjFeWa438iWQgjbBpjkUJihWg4wBaBuP5zLnkrj87sUVmbnSpn36pz2kDVefGuMqpYmFTP",
  "key44": "3odnh9KYBjR2hzGLVWJbQyeyrEvXRoCtPA2NWftQeBQ7H4HrgfYr61PUVAEpdNaYzS483rgzW4mvcPAMTrRZsZXE",
  "key45": "wUtRVpSqg4Zx2QXRJbjvvQmhJA6qPHD5XBj7TvoghAYmneS7msmVTRVrK6keq7zNE9siTJVucsvhsbyZ8M2jRAi",
  "key46": "4VbxZM95ecfbghGQAPoqgGFQJanjjN1YRqqmanoo5xF4vufwgJJKFqznr4nqZWu3iA8w7VNyteAgPB2fXYujq6mc",
  "key47": "3QBKtjyU4cziiKkXF7XiLZ7hsk474qh3igxqBvJwD44o7mvED6GWkM68Xr1H5TDEd7EujYrrqswv83vA4W7fYxKJ"
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
