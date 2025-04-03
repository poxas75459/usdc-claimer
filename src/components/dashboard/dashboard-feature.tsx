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
    "5EvpVW6pmokMdWJVhw19Dh6yJGn5ngp8FD5ESm1QZsxv8CGZdKW9qTgWMNopNQP6U9iz55hgN8Hs3ePULP6dCs2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tj3B7B9oYTwgBvjNvoGsENuvbVvANQfDv5VKVfpLodFaoEFdSpkTBiyELJtDCGJkSpQiyWGKFENNJKP67wtb8nJ",
  "key1": "5tRapAKoFUowBsmKBw9sbgBex9BBLmCJ7agRL2wY1BJnbxnBD5rC4oBhy8iWC3eRwcoKCCiJKgSiVotg8emFUmi1",
  "key2": "2v9dtL7DrTG3BtsdzPuAfJUEn6h14chTTcVUCuqdmrReUwSkfULKni7qwUVYkJar3cW3BHW7wyvRUTFazPMs6ev6",
  "key3": "2HwHpmo7jy1HqnaeW1rfAJBnEf6D843QKCF4zSEiyAqRJiJSoKdqBuVYeH4rBXbJmsUvjuw2N71RPRbmRtZXuKxm",
  "key4": "2uf9Qa36bywoJEXCXLAF5qebJZS9kEpZiz45X4yiXtVTkZRwssm9aUhWKu4dSkVnkqL1USSF4WUGgp8SViuBnihH",
  "key5": "5FVgmGW7FRyDptdKi62rexso3VGaBY3vbTgPgZKdJvR3meoWnCswg1dmEzKpYqodnxokjzGUprkM2StCqT8K2CXW",
  "key6": "YvBXnqxrMbvu3JyPgZ6BDCn9baY95dLf13A5uNEHP1xyuexkZmNbtAdPx1RwqA2zRph1gSQu7VMUJp3H4gHgtdu",
  "key7": "56VpssY3vh4QAsw1oMTbjq1LzXYBzfCK9p4Xrppm5icB1TJmFuYKfQJprXw7hf1adQS8nUby2gajk9uKbH8KAoF6",
  "key8": "4ofAnMRwyoRsVF61sgZ45EwvMFHE3YnWAVb3fjpH3v9Fw2zPyvVyCqETXNp58Hhn6XqEWZvLgcdfpSt4LxhnscAg",
  "key9": "31dX6aoGkgV5s157Ca5ngwiy39Tf6gYasKedH9Nj6qQw9NRFBTrLQa2BMjfxmV3tRhureuu2vzXXbBqTi1264FYs",
  "key10": "4oAbJom86csVZ5riR9zNsfhyyQL1XovfoEeRGbX2nWBgo79aDFeSYyDbnKQ9FCT8fiqjZB3fMDWguEg4tw6XAcve",
  "key11": "33oP2xTPFVvu4qcicbz2nuFJUibNpeJ9fpoYt9TMBrrsTPP1HEafsStDa8Gute5VLBneCvoLkRdoyZcL89N1gnN4",
  "key12": "655LmPE84NezxAYi7eWLEwtswG3L6Zk3LKVkhTmJhVtpdDmD6tpUHptG7W9ewy1q1BdNP9gDz86Je4NPcr9an6Ty",
  "key13": "4AmLACTBVL9v1biYyiG7x7sLvhUMLJXkUWRdcAVZ9pHejZDrTN9wpF5iZoXYJDBKi53QKV1YqgD3q6k11tEcKun8",
  "key14": "462oQmh4DmhWfLkJEr2XUJ2h3QysrEnrcMM7Hk3J6nouHrMusaVonUtL153MLL3NWm7S9ExPgk5vr9hRctMXRz7i",
  "key15": "4Nq4EWdDuiAXrNYNbwejCnqeJUZggcyVMfitSrGHCpiZ8v8NofV22db3FHBdpokC8QU4PM968hd4Y8Tjo6uuzEBJ",
  "key16": "5hNdbFqCYaza9F5nTijhPV1fRgtpTaL8F1MeNHuAJoLe1H3M1WsbhqtTLXXNe3QL6d6rRvDw8uAYpm7Bx7GJDDHZ",
  "key17": "4XFPrWWzcEtaLfXZoPFxLPk5uj8viE31RWayLDkxkzDxHBuxvLLx9iQU1V1Fb8rNbVad9tBxfxHs1becdV5tbPyi",
  "key18": "48NEXin5Uu1pHZ1FJsXmd2VgVLDsU54wYnBHHsa5tkXGhBQKZZ7Yp5XDMYte1Gcq7kmUJWQ7gsT3QdEb4LcLnMyK",
  "key19": "4V8czfdiNE4f4CzMGhex2v6ptdURdSwtBiusTLTTitoRDGJGkUzt6vRWFsnf767uGqnkcQ7dFAof4JWjw6CfLUFf",
  "key20": "HxggARfoqew6ECKvuT8saXmp65AgpcQZXfaygSGPAnhAfqPyhM4DE3zPcjATAEUH26iaMaexNdDBPa2J57d4Ppn",
  "key21": "5xBsPf4QrfauSYSUrUrzymFSKsFUrKorXLapm5tVwzGYZRawHhW1z2HKNEEVso7tq7vTJyLV9g4UYiTdtN4CrHjh",
  "key22": "3aGYPLEUkaXj8WYXAS2qzHPSPmoUJfq4TCszYU49MZN6nPab9QjY9im47eJsXG4XzVczRkBq4pgGfaKZyXc7SHh6",
  "key23": "5A1y2e2ZU3am1TLcK4uHYHX2iNgQPrR382PTyHQqZa66QGkgvrufumPy7wLXvK8D7q7gy8jH8PRzSB8DzntXAq24",
  "key24": "47jH8VnAuLVZ8PRpkKyTYcFqyXFrhrnHHy3h2iYRWfT2GiNM4LvdmU3ikfNEMMC8bEXMivtYvb9DsVooCAwQMgyZ",
  "key25": "4nn7DyLZRA7N1QDHpZJ97kWHHDgzeeUkAfeYtrWUL8ETC5TLTXSmYWgnVUmbsJfreywPF2A23qQnk4Rz7WVpLoZR",
  "key26": "3tk6bn5cF21DtQ8s3Qhb3v5qcEPeFitbrQbiEzEsraNE9Lt7QxBdYcNB96itw5Wnh9qN4U6BAx18K2HwacF1w6Pj",
  "key27": "3fXgcx74EXm1ENT9sBXNdYskV5Rx8udnpM6HRwhc3iSeMSaZSNHZVbDzGGNs6AXohCfZ3tk4UuW3BfuLJYEAHzxg",
  "key28": "2s81ivpiy1rPwddbZ2AqdPjguBFPtFSs8coHKP4g9zaR8Uy9LPVEs71FMuA4Jfr5kdW1EoK7SNB7UrVetNyKPCZk",
  "key29": "3VnpdYN6PBRq73qvUpLmAepJVSbmAqqAHJqeiUqTcjQ7mxm8MCkhpi3SfEfNMN4ydkKuXWDQCHaSpkppaDmiETxL",
  "key30": "463ShZREg3ABpQt4kJh1hSJWkRz8pEMagJSSBfWLgRfLj7VaFrEwRvbShTkrvgFQ84cBXVGxSxTuthfS5mMUn7gV",
  "key31": "53nA9HVSLvY3TtouzM13UgVjJUkTwrkcah2BK9Bux5qiGg1SeyexRhA7uiW5bcqFaZDeSGGUXdXv2fTVgvSgZwHA",
  "key32": "CwvbQTkSYpQtbKVB83DCx5Xh1W4DztuunjAkQaZSqLqCab7aEB7PRc3FauTs7VChkNkeoiD3Ey8L9u48WjnBWGD",
  "key33": "2b9F6pH6bj3n6EsBZJ8W4s7f2bGfDCXMvHV7RevRKbYJtQteFUPQyd6Xdetie5jMKaKBh2W3tjmSvEFNdty31AnA",
  "key34": "SZAreeyzpVKKhp6t35RKqXxXJGq1xwYguSMVvAXM6nMvG5FV6ogBuKWwFnpqHhgTNTHdy7ydqZmb4csgHMWZAaw",
  "key35": "5exBrF9ifJbSaSsJvQmfAgJaRopsYCZP3UgetwwmPUmbQtWwefxHqAGRaYHq6XA7g7XsgW8okadD1YusSuHFyt7X",
  "key36": "5E91rPcRXsVPAn36eMVbn9oBtf5Eu16PQ34fAYtut8ZDxoHNiBzwXB8WMTwFafnvVhpFyQ9HY152RMfCtDaAZ9rV",
  "key37": "2UDDiwwKEndyMtGeexVKYeG8RMAfoVfTXwZ2EJ5ntkKcH12hgXqJGkwNQ9Dzts4ZatAvJcqatRYGLfCDpv1HY3VF",
  "key38": "3njL7FGTmY3sPEdYAkgCYpQqfTNAfsaME7MkQaDCBZSt3sXcUGFMCux7uH1DV5sR1yqzmHdsrj54gmBS4jc1CXxS",
  "key39": "8RWySM3Qe2EED6Z6GXupvQx7kwfdhHpXps961hD6SALNrzvWTTTHV3UQpw3qpx1ZWv5iTKsWhxA2jg91X5YJeeA",
  "key40": "5edw1FJA8ec3NtcgPcZ1EKUQsosmkqSzoC3ewS2Kuar9km9FhjuYuD3baoThmJcr6SgJtDqafQBgCXXhzS19AGwj",
  "key41": "5HfkapowCoFnxgU3oxb6gfDqbWoPTQdUmhb2KdsA51YPrjEuPtPqra5dvfxUWdCHhcTYLy3Vo7x3GtY4sc6vcxP6",
  "key42": "4fVHDVkfVVwfEi8cCuSH9FoDqUWFo4jLBH6Xh4EHsD4PZ3SnZLKBY1dXc9T9jE2rVHQVhz69fZRc1zzAj8Qxo6UZ",
  "key43": "iA1EbRe5DCTdwY5Dm85uhaqmNpGpaeux4PUJpzsKaZLMv4xWubx7deGp1qRLbHXCebCYVQNBAhFZoe5DFEb85bL",
  "key44": "3PhjbNzy3R6gBeyRnc15Zh5t7JhTitNWvxTwrfone2tLg6XHVhKVbgzLnzLWJBkRQ9q36wtXx2n6WdFkwKJ2VzhP",
  "key45": "YDvwgezP5XWSegwQtedLBxNftEVs5MN3Fd98yWv5agYZ6pYNAgdk4E9GrJ62GTTZPoFWWQUounz1J76xkym2ZhN",
  "key46": "5pnkDXhct6mAxSnvzrSnbMYVQ46GsEj9RxmzWX9E9YFya7obTM9b94aS1YjQbq5apWBgz6qi4w1ZFMHcY6Hcoe8m"
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
