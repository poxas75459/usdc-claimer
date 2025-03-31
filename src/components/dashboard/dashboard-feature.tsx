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
    "64qyRdeopzXWojYs1HFoPiG21LwbET9oKyWzAgqU5ew8Wo1vPjDEzq9hTAkqLJQ7ZgrJgM6ugapVfrHu8QvQSjor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D4BfCZcmHZhvMmfXYER5zf6MYBh3vxJPDnbsM1ckiy7EN6ow8rcGK3KxYRtCch5ufNTy8acUEeE6FcYjJmDdonY",
  "key1": "4pMjciXthHyrHJ8x9MrSMn19sd2RMBc2oZXejBgNMqkYoRti99wduAhvVg2KauTvs2JnRo3QarPG3oTrQuGaGzcE",
  "key2": "ZHFuL1QYbZEAhrEyeh2HHGKEwzCskfN42M4fXfGYojcYk7GRbePFPpfvEnB5EBPEDC6b1MJiFMh58D5nmQXLCzr",
  "key3": "5W7heEk4EHMta52sanAMGSmVhDr8aTjsMKp5Yf4vQvQWJKrP5LeFWkZ4bU3BxiaReoFKdXGSg8X5aeMcWUcGA5UU",
  "key4": "5FzJvbMC2ep2EH1PPM4mqcYPf5gDCXPDedACBhcAFyrf9QwR8RSA1YWSegY6d4mpkv8NUdDwWKPQVJYdxcraC8ik",
  "key5": "2BZK8q7wZpeSRPNUc6wzYJQyJBw5PLS2bkCuDAAGfWSusP3Stvpw2NPqGyF381AS7f6krv3fK3mjZMuRkRujF5kN",
  "key6": "2VyZNCWYe2uoV7nZWGsaKvdZ7oQCChrmQRPqotRr3kcmRHNaVJ42Q3PT7j2DKakeiJgscb5xMSFefNZGy9ke8Hgd",
  "key7": "4AU8LwMMDHfcYpQCmMnDo3tstbMAQePsscNE7VR9fZgv3n9FLb9hCAk1QC6wWX4aA8sY4P4AM5cgBYPxcU8RsJVD",
  "key8": "4ajMLy5sEtW84FNA38DvBhf6PLB8B7zGa2wNPdB6SdCj3NR89o4vvFdbqs2yDfJW2sJ1tPWB8qrqDYPr9MZkRZrV",
  "key9": "3cQYGQgEgzN5PP1im36pf59VGJNTVkXDTqekJPQNzQejvCVk1ZvGT86i1Wqz4ZyBYCtvGgp9rm68wEDBR3e4jWdC",
  "key10": "5f6GDw2aP3EQXRZA8wqnHfZrvMDsxSFtxFz3XP7r14d1jpv1kMPMpzns5ZpQrresRGromVEM8eep8nJ5z1TYivTF",
  "key11": "16H8iC2zQTiNeTEdcQu21kM14QA5uVvd1Bf5ZFrtxvTTYXGQKt82AJun3mrd7LCHaTJZpnBasYzE3KnK54FrqpB",
  "key12": "3v5oM61WucfXHwow2CC2rZnVkK3h51fbPGwJYzNda5TnAtNmRFbavvHN3Bw5oK9brkWEjJnh2hhWAUudwNYaG4wu",
  "key13": "4un17KdCD5xrYeaSMThpqT88iKmxN8aMYyWKQyKpAXyxBnYvjL7XVjbAFQ85QQenChGbKEULMR1moZcJAAViKLAT",
  "key14": "2gFpKGmeW4ds449LXmPaK21mKnJmFubi57KmBUWNGZSYuQc7cP51XdkSLdfDX233hX3JDjMkGESz9Kj5xBUAWY6D",
  "key15": "4X7L51k6btvHKiLCSinGhFTGDmezC4LVmUSe1Ca6t82LFiXR5fR1ZcH64rit7brnYZ2uCUdVZpwLRGDNkouQmZkd",
  "key16": "4iKDcQ6aAy7si6SdhNsLEdFUiQgDaCuJ733LFZ99vpLosypUSdNyUWNK98fVXaHyVRAGxDFtdMkfdhZ3Fjsgy14T",
  "key17": "2nFdCBmXvCEGxfvrYJrMxWQPWtReXS62eEeYQmAc1LouWRY6YwebgsbS3S8T8efWaxtjPBFV7Rcp8CAUMHn2BZAL",
  "key18": "22MaunPReZo7Az1AjQA4YfKNpJJKjZ3Dia3Juk5PrszdGTLMspRV1KKmCX93nW96ekEZhqggsMqtXARiDvW5FcQY",
  "key19": "2jwj3JQN8UXx8LsDozZBUdDgHpVig6BoyS7w4ooFaQru6mVGaTg6WV6yGjpH4JDYzXfKBHAhrxQ8Rk5A1TarSKLq",
  "key20": "2WRScz5vdb6AUeB5VZMudXHqmBUW2XFESCAPczuUaSS7CMsDBsx8fkCJ5UAJ1nTrPV1RsVexbZgUtiZGh4TyATVx",
  "key21": "3BDZjskTPFwEDc3chHKHjvU17LbNyDyff7vpCtZ4yq1FQwV8R4KkqtG1Z43bvjnvEcbFkQyFitawkNLF86zc7dQA",
  "key22": "2vk61EcUi8F6agkMUV3Vn7sqQmJLcdwjQXepTCaBjPyDXxN5W6kcLRgVTU9nUYCMWbgJJzxWsE63vfNEH2sbCvRP",
  "key23": "2MYMCkveRD16zamM9sRdDHAYJaFgL6FQngoSbgGdTyueyodDHadstS5vqMXPaTGDY6PL4H1cUKEfCCtCZ3P3S5tJ",
  "key24": "42tdtBuM5tSpWECebgHhYicahKoi5vdwkK2dcp5XVsuX5w9UxURgLpiNrDZdctXtupyTGtCwixVd89bW1K9so6Ee",
  "key25": "3WvJtoR4drvWvZnJbreMW7qyD3fxfoyepiVJ5m2h5c8cEiQeVB2uovVPLsguPFh5aMC6Mf9mJCaEhEF3wYZUvgvE",
  "key26": "3bGG9nJdKiPQahHeXQf5KiGjvFhDjQLSc2mp9Bfwtp3V4UsUQQ1wSLGhfKSLwUXxX3xe4nWr3iK8N1rPnafnEJ1X",
  "key27": "2WRQM1fGgESoHLTPeVATZ2KykL59Bam7cfLWL293XS1aYmwKJZjWDJWUGMak8agBQYNVcMDDNQgJgzKdooVDTVpK",
  "key28": "2rzwEpNXzJmi4PtRkyY4CYtqiCiZUhwKGxe6oPySLAPw3UhRefX5kbhChd6NMuiFUh8ioESrvRFqWKyBWpkDpBp7",
  "key29": "4iBHr1gzE6ShhbBNExCE8RL2Um4bfC3PXGHJumoYxwqGnAQ656v9gDQaCdR9Snsn4U659LgoEnyuZZm8kmaW7DYH",
  "key30": "5cwb5ohMc21r5EsRj8aN2bPr3AT6yhY68nn7JGiJ6JV9hXoFPmiwnfQF1rENLK3d9mopvveJqvy86o9DokRQeLD6",
  "key31": "3eYZE339XAjjWBUyLgdhC3YH4QyVv9UiHnRy36xqDrH52WzFcBsN3FbZh9wN8TNoPxe3xMzobZkhWAoiYjrRCmci",
  "key32": "5ZP421UgDmC3QLAfu5Estv4cPCFR4eZVTazJC1k88GuUETLDzRy9CWHno9GnFETmSGX4mT4dsg98X2FQTaL941aX",
  "key33": "29ZjusyuxoSQ8EnFMFQv4mDBmogK6cHxdgRD5d3D9D4211TgbMSPAbJSairo8AUGwQwK54hBJZk8hacEfZxw3nar",
  "key34": "4XRQP1ATH3bjcoSTktLPxJPAJjysFedLtKshYnFptN3a87VKozEUBoLaeDAeVvbVdXWZ9htXrx17Cajcs9caR1Ce",
  "key35": "jQvYi8km45FkQVEA4mSPWpi31urZCwJB6iDtmvrL1JFFtjjB53kHAx2duDDQeS7NAcVuWbVYpKuTFm2YLoPSevu",
  "key36": "4acGWCu1iRXzTPbLgDUxJ4zHkG2pYq4spt7PXyEbEh3NLzTPNXEPcgJPdzpZh1aFkRTLtpoGmgAuk7p2CQcnzVcs",
  "key37": "4EyZXTp6W8a9JYtJ6sschR246UGFSEK415d3sCw7xLXq8hkSDqU4ruGePFoiTTSGKEE861yx8Ds325BgnpGhzutT",
  "key38": "UPMsciRgUGAZuXsBV8Q8Qd25Br1b3FNaNWmBMoArBPzUkdzfExoQ2ELE94HqdcGi4jjFThMoST9J4z9K1J95kjr",
  "key39": "2tiu52DktsyXPHu2PyUMemzbAbg9dGFXvHMPxBuaDP2pWR7NuMSS58XBbJVV85T9NUXCwkbttzntqGgDaJxTM6FF",
  "key40": "5zxYX7rw6zoYeLNT8DCV5VyMfSwdHTcXCrjBf9NY7sHMkv9JKkFohKPk6DtrGcdVi8MFwCGqiMFCUu1m8gyJGJiM",
  "key41": "HhkyqpYHdBDHTivrfRfpzCuoLSTQTdX6mVGEeStMuQVWhndbFgJxFyUd5EM9kmcAm3BSQUWK1ZNnEqvQtrf34ie",
  "key42": "3oQ4krDT8GdrsaXTfppdeyUzpzypMBEp1M7QaTwMEnpUT5q3FuRGGjFQqMqMXBTStSxuDKaqAgnb7V1XTZ7fT5yF",
  "key43": "4H9LRGtFsy7TndzQJLETRA8EhoCuKprLU3hdg2Q8nxTxgd15cwqi3E2c7VQmBzVLVKEqQzknaHwwiEWN7NpDyJDt",
  "key44": "5SZVu3Z666T8y2et5irbZnf8jCh7JxpfdMA92XKJXVyyDWMx1owp68B2sWz6hJe7kxGbagZm4aDKDs2wi5wLL5VL",
  "key45": "2GSF7L4ksS1AQVwSzyJfdoAy115m2zaEUnBF9fQKtN3RrsomL6NfCVrq7mpv1fP7gaTMAwhaURgcTRHxURahZr6F",
  "key46": "4FE9CNoamTM6wEApBy35z1gVhGotV38dQ9ye6MdG3Zj7uAzUbd3skpEHzxQNWEFvg5g1hwyPMf6z6RvB6a25C37v",
  "key47": "5nb6MRMKE1JbZ683tJRSx4T3VDnkSM3v4D6wo6KNhKLVqbxRdE5Zh2QB83Ae8EGH3MEHQnSaTBeD7FGM6xopYmVt",
  "key48": "2GUGeBKqu925kn9ip2cUYec71bUvBPmxwbWyDbW5fcrebARU8g3bicMea8AAMFTw8cd4yNT8aS8182y35NsZZDuu",
  "key49": "5dX11jK7ba4g6jC9FFVFP3HsGCURiVuFzudJyXotwzSfsUrDbPAfQ9UKhcVBZJmmuNs26PDP7T44k7JDWuLzPLZt"
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
