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
    "4U35LJNvbLhPZTuA3qairyeQc8tiDep5Ya1SqR4y5eett28Lx276VYYK3KKA2FhsAvAsjpjnAnsFAsEsDJuRYZzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YQ8qg7Gjabb1Totwxr5mmTYL6qj1AsM6wF7x8xz222GqW3dBwUcPqPAifAjEVCyipWgUneiY1oq5EicWZYKMEx1",
  "key1": "4AuVAucBmPPcZcEAtKYPdkzwPuJT1HgKjdoYz8Zq42LAxWneSNoeEtLZ3v8j2KZQ3De6DEaPZrWMJXL5uz55YG7U",
  "key2": "efU1kqRs68S54WFm2sWBZkshzbkhZgQf4c3EHBqmQvWqdguSQ3waapUsvJgFwXeKaNTYK1yDQ7wRqTHsuTZq4jH",
  "key3": "5UYFBBAuN3sUuoJ93Z4ZpDZhx9NoccoNnrXjGV5WrT69T5Y3N8dn73PY6gxeXuXcDxJVgQsT6pL7UhNZhxZhKzaq",
  "key4": "43hVKRZ3N9W8QDs2SLf724C6Yu2uWKx1GrKjp64RDZFNU5zvBZuLx76aAwwgLHr9FuxSsdQBNdvFvJckQX2wasAp",
  "key5": "2BuC3z2tYbRwHbXmL3d428r6s2HxKJZDCQab68vRWS8uZ1AjktDH7hM7xeHNJJmcA8d5NK4cDRPaGN3NaC58CyLG",
  "key6": "38vtM469ps1RfKTPvwyDwPiUPzbJJqxUsEyw4QuYNjugtGY5Q1AjmpGCm67UnYNTqgnyqCy3GiQXPNpWSjYjpmZz",
  "key7": "7YgQWABjtNihe1wA3cP65Cz1N8NrLgFmsBrooqjiFiMLVkYHjHRUNfGJmS69zm6XF4znwfNGhboejzJBvUi7ZUY",
  "key8": "5gfjRnfkXPzU1PnavvoyDRxwPt7Sao5Ygn4wjiAa8cXQDDRLXUvGkqxqkT8FahrC5GjxNdKe5LHwfRZnPt81xNBX",
  "key9": "2GY2UmDDFGXJZJ6Muy2XrFmvaS2h1Yn7fPZw5npzdPu8ZfTHgmPQ2W6jeYTynL8ZZfJEUhMV9zZaGrLeXGZFgX2",
  "key10": "4KgXPjA9S8HNdACWh4bfunxdQzRAe5jHvriHCPMDqDoEJDtZndpYx4MajseS5GVik4ZFkQnDEzwc5oK9BPBDZkH2",
  "key11": "jn84ai5jiBnQhYfzu6NH7i7UQYLKPgLGxtCLxvPfmUukBP2pVWnLxGuuEev3yZYuGkgumjtEYNv1x66qAz291No",
  "key12": "Pmhw7F1cZHHUfqtaYDNndNfpUxckzxap24K591Vbcr3V4ifBajh3pitVbK34gUjXm2cG1nryNtQmpBTHYwuvNEG",
  "key13": "DVokAB43tLqHez6WibzoJnHL5bxUCqqNVG4p8QxDSA1rXYrnvDk9yHXfLcbG6e2TGXEtg7g6rULocQzhE9Lp2bz",
  "key14": "2vkEFuBwL8hxDuaJkLCMZXyubhs9QG7NRWyYFeKBEgDZJsFWmBR1ZkDcykwNVShBQqQGQW3Mx1RXaDKXzwpL7njJ",
  "key15": "MypJvCVsy6hvoQvmXSCweGnByPLxzj6WgPqWWyX6vMJnRb3fTnwf3eKWo8VyYaw5B7fhSSgQKFhYsLVH89rUwW6",
  "key16": "3TW2hCe1V2MUNnHQrTKoG9ZmCGs9LHSgWxRertdx1APLk2Q5jYN3FHN2txD1A5Gx1TuYAH4mzKAbo6grNMQBYjRV",
  "key17": "Q2tk6RvjXfuELiy6s34YGMU43Buiz7gYgzXnXQ3WFr2mo7LLZAsqSfAfPuaGS5N3PbutaRC3mCPTqNYKS5y68F3",
  "key18": "2MCEaaaWZ8VeTFdM8Vxega1dPH2wnYouaduZdX6iF5ZfSZBY4KYNDvDLVQE8GQMp9zwrsFLMfFW5XAAehUPJiDAL",
  "key19": "XteS5nwh9WgkPLwTUSiimUYD8UYTtmvXJdZY2eaa2ARdGu6ALjLRSPzh5VnCCWvK79VuwqrBX2QaaUSYKXJ2HtT",
  "key20": "2wHCfs3dgcb85LdHQ6QrWwJXg2umNr7docwgKaqW4zPifsbh5AcYZEFCdFHyHGHCxNjkR7dVFfz3nQpKJhWgoHjA",
  "key21": "5ZxaAaQP3YkPoUNKVaqA4RCK48RqDwvnsMT4FHJ1LV6aWYXp1NKG3MW2Hjeh6uSwapZPbP7Bq2RtM1nCSP3FueQ7",
  "key22": "4wSWM4shsXZHsGuj4FoLYXhbW4ToxH7e4fUUerXyHo4sq5r7QNv61PdrozsBkEdvi5o5DMGr9S7f9axcjpVFVP8i",
  "key23": "35L393gSMPeHnZJ5chxwwZwc89R8h8PAhyLRU2vbpYkt97ykKeUp51es1njKGg71CoRRZ3Wz9RAVhNLTTSm5A6MD",
  "key24": "nbsS697iRMTfpKzRTqnuXqMwjyUwzoiMQocVYiV1aRcaujrNGE2F5RmCrbfX6wrdyt1E2isNEcz2KGGSddnh1aj",
  "key25": "2FVRMetjShqXDfWfiArUhoK1zV7T6k1wx4Xiwnwzzsa4v54Xpd2xwiXKW3UExg7fJBYHmvNqS2ytoocYTi9yG4Kc",
  "key26": "2e7UGTaDPfR2N6Nnw3KCh2miJGW6F6GxT2j8NLCSY4NeCkgg4TLbyWRD3p3x5cRt4we8NH4mqYuwGKhuqyZSCgoh",
  "key27": "PvoR3ovTdTdkVPNiwu7zbAEEvsyeM1XoTUrESFgGUgXp2jqgDhgKPsmaGpxxgPUkkNCFifreDsbRNFCo9Mu2Gk7",
  "key28": "5D2Ecq8a57jmciTfqabs34wVHD8XEVuX4TJgK9fv1LqfYbuFNS1kNyeAouWFHW9TRXSkDSH8WJehA4qYEgCLc15g",
  "key29": "5VSADxnv5i5BxSHMRd9hCZFNXFXsmrFVUapBxDpTPufVaAUEaouwbX4oEqW3bnugeBeeDAFEKSGfS5XzvWp98Dmn",
  "key30": "5bb6RRTLJDvyzGiqX933otErfq7UtUmJvYwxZftm2drzghsQeykE7tNrdDh6wwG5xGQG1DkiZPiZLAtDMhdJxSj2",
  "key31": "3LrmxfQtrKWxLpZnEiCFUbcJLyoWLp1mh77JH2DfNdJYH2SvhvSwrDGs13coD3G2dDMLtgrqK1Efq1jEWbEMgVgy",
  "key32": "32sMDq2KTT3GwTrfHdWL169bfSXfbc547agNkgXEHJ2gEQqSZgA791qNMPHuVM5za4TtRuov45qoKEmWZL5jB1X4",
  "key33": "3eLTgETsNkcd4YsxUhfCRAznEkwFNNdadJvDHhbCq6eNvsHAdcxgw4b2FPrwEMaBrZHHcMpQCmYLED5ceopfLNqN",
  "key34": "ribvWSK6D7WWoZvXfgznzjvqs5LMksusTvFdYeh1mAXnHmxKN7jPdu1wgGNm7kRa7gBs4GUm58hRtH3ZiHKrnss",
  "key35": "3Hh4n99NHSysDBS1SKCVjoo91ZRoHxrFdGoRq34HsUh5diwwqQqqZKrKM7spri7iFPaPRyyYDZxRjSPaRazqa7kj",
  "key36": "5aBW3xWKKa9yUFHyUDCjwD71tQcTRXU9oPdJeQSYznxG6PnzFqZoBNacYXAPVd5NGyL2zQJFnhPGJRV8DmXyLaoE",
  "key37": "4B1uwKXTgk9U4eyvZCAhH3CuvrbvQ3w6Y4dLLqTCnxHndtxEJH7LjKVo41UQAviLtjxfA3XUHSgHDcmTgUBLTTYx",
  "key38": "5fFE4hfG1NrcbxVySkbMoq1UC8ZPJvK2dZRoMsgT3KAYdqDrV8J7nPUtHK32j1cfPoxGvJ234MHwM2LRfmi87G2V",
  "key39": "3RkKWtzQmhw1BMi6XxzM6XoP9nxY8fqYZhgGVzHQcReutMcKYfjgnhG55jrfBusUUVN2BU6R6TTpzo8dB3P8fWMZ",
  "key40": "3MVzEUFwPfE8Uu4a4krCWhwu94SgPSaLywBenyugNAv4yUJQ4xP1rVYgniUZuqmCJrQbLgRuHbAujHAnYqNWYD59",
  "key41": "233Skg2YWhZS1vsrmxYKuuuF7skUFPohzu4J889vCDZPxDjGhpsLDKtBKvt2v7cDJKEboqa5feyiRzgKPEaYY2MF"
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
