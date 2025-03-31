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
    "4rA6y7DoTm3XDcYnxWRH1wvjhzcm36pfLaDbPaxkn5KLFGjcZX8wyCGKTaVXU1Ks7udoVoJtp6idfWyeC1NazJ8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GLc2uPwyW4u9EeLosNX2R8k6QTQeigB3T7PnjZjTHaRAx96Ra88DZToJJM1SV3RGCzyoZ2byJBR2cpj66os1kPd",
  "key1": "2Z7ihazNSUgDTsNBWzHpm3fCBjqgEkhtjXDzXBv7DRNBDUojsqmjwm59k6dZrJ548xYYwfS9LsWsCmRVYLRRvRox",
  "key2": "5p5S9kbHuPi1TpUNBxE4wsj5KF4xff3FQZBoyp4dDrvYtiKA2TaduEdkdm2HSeBvb3eKBvoXpaNkPwBkpF75yPFD",
  "key3": "2x29DRBhSM6Z6G6M3PqqcTvV6rhL8KHDYFZzpX2Er3Jiq3NdahhMtmdtzp2eJsYhDynBHUDqxEHvf1TfzeLKLdAF",
  "key4": "29rHLeGjUFTx5sta3chPBb7k1Ur9P2E1SjuyVdgvuL6bTi5RTHnzsaxJHyT5uiQCyT8zZAh85zj6DVHsF7tzvqmn",
  "key5": "66sMgigomQu3ioa4R9BJLQ3ah7qb2oFwtsoc7WLHk7fdoYr6UvcCRtoHZCgfAvL2vU1aQQJsYgd4kHJch1PXeeTP",
  "key6": "TaKxRm8Ko7Jy9vwoL8bg7LaEZS24BTPGHkU7TzjfshizNhScJLDukRqGZmbwZwdnfWBTaKaztMGkgJLKPaq9MYL",
  "key7": "5SFeZBmDHt13vqcTEo62Q6PJPTnVg1CCvbLytNxBz4TEgwBnPX14gxyzWMRj67iyki5LZVmvx3uZqEigGtx2LzUH",
  "key8": "5Si5vya9gg8385KJT6ztGWDq4e7nwCsGb6ck7oyo7EazoKBNYD9M5f6cUv3WxWENPPw9rfiMyiVBSoJxcvoMLSjH",
  "key9": "51sTnHMcxFFHAxDsLqoBkT3HbsbiHuZ5EAT3x5La31x5ewBiJUhiTx596TVQAN6UqzwG5FXVokY7EeCmMHG9gzVy",
  "key10": "4GSaCbvAyZsiPt9knEi8Rd2YcyuqD7JPzzxksexzdwLYaPFPrmYmFRYRLubQ3yuNDxuHBggHJFqPKE6R63uJiiSN",
  "key11": "5kiKbhDj8BEFgEskZZaD2sBU23f4K3YhfBdBcoXCaEuRJACT7XpBqbFwAtfbbojVa3kh9z6TNwfdaLrm5oiATXkQ",
  "key12": "5QS4Lzsvp5SorY54GVnM2obPno8ZRJC7oeXQzKyXG14tzHDbxaxreRQJNdDHpAJqNkQeFaMEbSN6oetrsVVawtUZ",
  "key13": "2yctpFcWrCMyapZinchi5uvVLdmkqT5F2tSikdXHjBpTrTWb94AaEL3PsQoL95v2uTxZrrt7EJ3GnZLKe6UdreBg",
  "key14": "3fEQZUz3J763MvF1AdWexet27W3MJBHDtU6AttrpPM8FN2hEZxkVCPVF1rdYWzAaWcVFnMvhdBvHDnoduiPGazKJ",
  "key15": "2eYynh9KqxPDREr1bcjDNcajxdutjtVPPzsQG6rBJ2QgvPojpyhvHeUPm6saSrDrzDf5Cb3BugUDspnqFtYaWc5d",
  "key16": "2CfNo78DJN6ewU2Zeu9aJpADzUVWgvY6Vu6DcFRCtXV4FdvgenbDHAxVMeLr1FdFfQH93Fs5SkXTTnd9KPUP9uyH",
  "key17": "4LRvNW9SdBJJnzzVa53JeGhGDBCeyQKAmbjdeEVxeQnCtwmZcR9A1TN1jyzhucjeKRWHWwcyAUygXNKfq566pVqE",
  "key18": "rW1AoMSL64aoa8nyAHnVFzWGNmLAPxNF4zpfYbRgLvTRDPe4wqawdVscT6YuBEDCexrfMZS2Ts9zndbCGoaoFXi",
  "key19": "2ZiqcPnSFQW6kFnRkJupwxYaDsEoByVzsAAvhqfBRjPx12cj2uKMwobRffV3TeViyK9n2LmhiTSQHTxYCbQtBGud",
  "key20": "3CT3AaWoEbwyqAQcfFBfPPG62h7i5UKswpkhn2k4jQjv9K2KsWLj53pr7Z3jujFcvUDs5hVFWEMZq9s72rCxk8pn",
  "key21": "wc9XKjshQnLvi6EM6j4Nq7XKW49CNs6ESjyEL3Yj8BgaSqnW3LV7grxvzwEvtrJVZ1oZekdHSDECuzVewKQPVWx",
  "key22": "fZwd7wiXMiy5J1MorUPivdwmodrFRaUfNknh3S3xwCFvM1txYQ5xKFTKF46uoTdAndvmdU4H99vAmAKAfFqefgC",
  "key23": "3SkmMTET832x9jKvMGmgZSLwQcnqtwo85H3JSpSh5qmofBcJ7vg3vmpVBs3oeADMbAqECqsbtkB6fDirfJaGnEms",
  "key24": "5tDv3nNZfPhzNscfbECQMVg8DfihKFzh353oxSEXadpYmtdtTX899bAWSBFKK75Do7WZJAJXXibQvm9c1zGq9VDN",
  "key25": "2HwAPayscQVAXsK3WqJJ1FxMPDmHwVf1jUSXZ2ZcqzLnzekDBrEf6yno6wMuKqZ5gmyKQncErEpYTbxR8qMJFPTK",
  "key26": "2CK2C18HKSeSGyRQLNuYfHoKuC4Jes7eBtqmNBQNrstP3wiw2uzyCXa9JP87Pg2SoAh2mWgdZbchw99yjbX6nF9J",
  "key27": "wte8AvebSAoh5ePnwh7FwnwoAdmhP3uUkUCHAAb2zGcB53QC3kR42LxJhgVdQVxaYPPjqugh29yFdrsP5R7vXwi",
  "key28": "3zUB2CzrmGWMXDjk3TsX6dyK2XqXPugU4WcUxhmiWnbSVqAMrZ5Qnn4JwfiHnkEFexvz5NxSyMtwoVdnW5VQbA3N",
  "key29": "CRCRH6CvexwYEg1kPzTGcWMAuQigRhRJbYuPiknt6ZpGqJJAhddFBfCU5QPTCGegPCfPnxDrGsQzkpusi8DTseB",
  "key30": "5uNscWxCD6U69AzXspeonnrU8531Nk8KhVj3syoZP8fvVJpCP7kt9KkXo8ECuoG9wB5EMBfzR5HjJiBfRixHHBBd",
  "key31": "3oU8hGpc4qWfWeWnzRqd6KPKahwsZn3TNdXKEvGd98tBEG5ERqvNnFHE9gSJDj2PnmhB2egmcEMQoa22FNis4QTL",
  "key32": "5Ephn1YGjvn4dmN42JjJqFV7Uz84DMk1eQ5QicCd4FAwgCk9QU1mPkUQZQ1StFomuno9SYg6vCbA2iUfvAWKSfdj",
  "key33": "4QZmxEqWVpPhiCkLJrbLERuKQJexLJTUjgxANhxMs9VR9yHQCfwpjawhfyT7etU2KQRHNnRrtTR8iGFkYTpa6Xq5",
  "key34": "3SYAMbubAfz91PFYaM4YJSXZKXE8twwnBKcY2xtDFoonvtPH3jaP6qzx5RFKoDd1rhXfoTfr2wGCe2gxxvoT614K",
  "key35": "4NiSHuiBTW9JUKLBzeP6V1XpnXUVk6vUErCJw8HkKX5bUocHoCAtMuExMwunhKc49xrtCmA2vDMTMUXz4jbt9UWt",
  "key36": "nvAboa4CSpjs8HjRBQccV7BiZP3zbXQh4jfTfQi8aY9nE4qyjjyBSBbfyyuihGP9Tk3pftEZuLLrafWGiTAUMgA",
  "key37": "5sf3x54bH2GSD68izjws4a1q5cUHncLvHizkVVN8MUEcrvtW4J9SRVj7dwM28Fx9QAvBQG3ph7CgubhM6A1DXWHM",
  "key38": "CCVgWUnXGFW8Jsa1LJedaU2R9K7qeYAXLYFm5DmzQKBVTYaSmH2DkVnGGJsCbygEb5Ht7Y1BZKNdHCQMNyvjSge",
  "key39": "5vrDBq26BJ46ahoKX3DuAFT7GMFEiDbUYaTkhp9nd44mKurG6W3PigV3ugnQRBRmBA8aCdv2PWUTeoAc6Pjso2au",
  "key40": "4rQC9jVX15f2UfYqaQmNcNA4TkPRaiiM5nmZt48ydLs1XtqHCcVxk95hxLkum1TVWL9P9Ejb2HhGp1VmxXaviVA5",
  "key41": "4pan2ASf9DMYanF2wuxv5b2Yxwi6YwQ1BMqB2HMVzbHr53AK6h9p6yeFnmFnnz5rQ5GoV7d4oB4PtY2Z2SBu9oga",
  "key42": "5zhBTcBCKtmaLhF6eDDbYd161AQM9WkrsKDQXorpQtJZNzLsgW5YGeqadsd4NPq7DwAMt5JcUdMjMZZgizodZXo3",
  "key43": "mPdrt6eAubmEmsrYuHKqVhG9vf8RQGKqkmhadMSE7iedUyHwMDoHy1ZDukUf8TibKqiLeFjUCqKoFnHjBuL4VNT",
  "key44": "5xsguv97JAofAyMyHU2wKricj253SxPsm9uomvNd23jpararCpYe14A2SKc8avuAxJLXYhbGRwrV89MNuazAVFuY",
  "key45": "QGxA1t35UkRpdGn71LwkTCN1pyDqvvfojssses3arof4jSCJvJbgxdwpcvac4t8sDDG266AAm8B1wGJ9ue9YLua",
  "key46": "3hCbCtEijEt3x3Z6ZqXeBgMxESxFKpAsmba9Nu1nxZD3TLpZxV6prvNFwEFQJ1NDJKSpthhjcMWDrSzKxWguYXtH",
  "key47": "2WRuvGmdLinr71d85meoan2Yj4GsTYGoZxiJubuwXvAXiXnFPusXxoSQFq3CRzEXJKWd58Ncvgj6eLokWKerJQFd",
  "key48": "zpooCMJB8dSo7zWTM7iU9CmvCHBQdaHdLcDKDjdQteMqpwajH9khUbkfD5U8DYdsPQxa4s394RP3A3263YxGgKt",
  "key49": "2StqxcJV9mFkXWttRDMopNYXNUBd6Mdadvwf8TkX7dZAfvGd8FX9SkY2CtQ99u9cFSxD9yFoBoqBHUJa56fUjXQj"
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
