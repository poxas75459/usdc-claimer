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
    "r1amXnky2H17WM3bDojccApj6P1daZsLZTQvQF4U9J8cRA4Q8ktUx3zrdhxxeBbCpsdfLGokoKDtF1o6AGSMuG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JQz8AkHoYkmzo5YXXFeCzHBNh2Rc9PTTvFYj1WvuMAqWLxmZiqfzNCpNK1BtqqyuYPjMBrZDrVoWmcdZvYPnJMf",
  "key1": "2fUfipeSkvdiqx9uHDRfUA1ttiKCGfrHdHv8NxsfBBmEzFk3aPGghyoirLEMsQX9B3uj75Ef1CkF5LHY2qg9UndN",
  "key2": "3BWnbP4KFqEtY7EWGzUuPhBTQ7YuLFqkJeJnBbNe4Mu5gKsjiWcJdRnnBhruA154sEETEwozbFBefPqhGsM5YKr4",
  "key3": "5XKViZMPxvSf9TF7X7FF7M5NfVYWnecYiBExNyzTUxCYqRDnNdhjpeHFKm9n7Z8zTxaVajzDdS4j2CC2nE8r5GBW",
  "key4": "4hDKCxTo1t8TCSVWAfU3TGwxdbsqo7g7LRtoZjYpePE4LEvHfyXNtRCeBq4mFViLJATidRpSMZTKjj1V6gGJ4LSA",
  "key5": "e8aR41WDDCTdk22KQKexgKAXPoB8644rNYqFuYMjUvewvryX8iVPzDPoH7ejX5kYLhBUowLDZXwNxcHiqpp4UAH",
  "key6": "2wNAkZcKp5d4JqWBLjoHn18tqpQw5GUqxc7sRZFfposrAhg1KJqAZiWnBWWFjsnB4aNbjHj4PGHXMBzPkN1SxgUS",
  "key7": "22zCG2g2ZSeDHSoJLWgV6o4wuMNzp9o9cXEqEWUySUBwQTAkFqEBtkCdaatRPznN7HeG3DqKeBY1x76XbDuejNCr",
  "key8": "2KhnpCVnB5ESLMPZHkdGQDQcCCEF3FjJzurnjQLWpK7oemtyNiBTnbzZEsWKBrR4V2oXHMmHEkX9cMoXvQoyPKr3",
  "key9": "UeTAx3KLiWoY7ddA6MD4esaWQrN7mJDMSjxHWzGvcRG5nvAGzy3XctNBs8Uxc9UpSMBzk3wrQPoWDTBGKQsMvQ8",
  "key10": "5Hrkw3VQUZumnNeYPh5zSYgPgdpb2iYYe6bgNzLEcRPmrpnKJkPNZdzhMZRzw5dipZthLqtCJELDkCQK6AhVHZRj",
  "key11": "7hqvSeC9kEa3bCPP3kepqA9D1Aqqoe53JGKvGmmMG8sfE84W7pru5hipiBB3cB4P2VAKF6iCTjekha78aZtXFwN",
  "key12": "2kLkNjXYsqZVYkEi69PHE2m8MxvFLiSDhZ2URmBVQ6CQubM4MTWcMoJccmFdFSBqj4pPi2mMSekWdGZiMwsoBFeV",
  "key13": "kZFnepaSUGLcmMLL5FkhT2gSymJe32Xi1jKmQZRfefoKmCrPYxvVsZSo5SP1BPoXBkv4uGoUQBzpTv77swVWxh9",
  "key14": "tPR2VANGG46ZZqmg3NxrH7DuaaESLfy8cwXeAfgaGmAU3ZWY5BKUh6f3dxMN9mujrtGJQmqfYrhkyeZ9GXqu6FN",
  "key15": "j7hGijz6TvBWxBJapFgvzWpSAPXq1UQWqRMgYzkEqEwqZfBnvPNPNm9hNuAP6zv768cEvzRJjFcddschB3FFGrT",
  "key16": "5FnBwZTSxD22s8CfJo6qgB44ni77RHDAgnHxFvV1SMgU6CoU5SXypbAQwrfyDtnRPA3mjH1wot55PsDqFHU9unwS",
  "key17": "3ukHiUnzPYrEpqLyh2hsjXA3P3Qhquv5ZE57rpBAKWWNNk15AMmq7zxXn28a8fWpgKoTi6BuyyKLYCnojbMdJUX7",
  "key18": "4A2RssCdzAoEBZtM7NhGcyZyj3f7anoi8ub92c5gyvvRGbDgxZF4sZFS8BfmWorpkdbjpbKnTenrHD1dNrsFCcZC",
  "key19": "3BosoQ2mzCGampmK3YMg3nJEn35SaWQ2Gphq8qHBripbgrd1FuTeDqLfg82okwN4Pv3ZJjyP8FemoNP1qjobbNxA",
  "key20": "2yxzZMGHkakX6Ct544h3vXma6CppEPraNrm6qiXwsWPpSKeCke9Jzzx5fwiAF5dd6te47s2t9ShAEKuV5C7gGPjV",
  "key21": "4kuLK2sc7Q8JcPb3vihPzAeP68rkojX6yxw1GbYcTixV1KEoxgisoDwxBhTjd9jvfam8yJdg2yQdzMjLBYPbVzxE",
  "key22": "4NS6Sa9PsPwtjxDQxvBend192X2azupWAnQooRTjCBdTQFbJTFz4nUdC4wDhmiRYaoENfzPNraziMF8vkvoxJteS",
  "key23": "3SyDpFJAGnNtPSzFuKRXCk1LoLWRrh7xxyZgmSywxiTXc4chmwC5pBjtQaYwqLPuqAJnHASyno2Hejqdh7H92ckP",
  "key24": "2aD9uWtYVAytP3Ntx8Wjpfc3v4jQRzqusLmP2yFEarMEc9qpWnTgURt6rt75WChP6anC7c8AGtvWo144eufFotCx",
  "key25": "5aKRzt9H2jck48ugTzreX9QAfEMu8yvp9jTsUUPK2HfiPWrXAqy9x4Ncxfd7fj5AEx7n4zc8XKi3dCX245xXFJZv",
  "key26": "5Jk1gRCKf9FEAXnHy3kokwC8jgzdfmTfsp58C9xEYfLVw9Zce81jy6TUWZ5HQMQcChiPqTnKCh6sWuEjmBGdn2Rg",
  "key27": "4cSR767LzZSAMVd59wFGLgU1k2mcoi4kC32ASw7aa9VvsQnMZqYFPyXiMPdBuDLyJwLBMh37GvtxCtWRFHMXCuwW",
  "key28": "4r7WzbwJdi1zACyjkCpwggNcFt38if8S9mArssBJReQutbPysVq7GDP75hULCqyPMgkoSQvHtd2dsA7HLgwmPk52",
  "key29": "4N1yJvUXBG8AHzyaRa2ij6bCxmdSkpKGRbpNFYDLkzMsVNcaUtmKQPAk7z6wEmUKxnrztwVghoENHQtJs5EwyyB3",
  "key30": "2pUfLFWDfkAN3hUZJAio3PYzz7UmqnXsCC2vq9EGwtkctBSp9HZ6htSFwSt1xtXjQucGebHS9FVbzhqV7LgZnYqV",
  "key31": "4PK4fFtDkayvsiu9EVBG71GFhkmsYcuHx1xQN16jbo3DMjEjCbNwUrACvWCz8UphVM4iqxMtZ4Xh1f2yqPmeGZyG",
  "key32": "3NAU9LViRWADtTBL4hPVrnuKYXHJzYxVeZqfitjvz8cV66tNZm3Qm53ovRUSuG7ScW89FPxjnbnxRxR3VowoyJb9",
  "key33": "5zoRETrRLHr9a57b8Z6LoDyKQixA8M8VrfLRCJs4Au7Ynn9V9rUHSLSS1aaaX6fGAw4o5Nh3xcjpFqLKrb8A3UgM",
  "key34": "3KpAcMn4g8EYsaCNRgQcnJBDhdw7qQXbdYiqX4L7MYvM92jzj2ZMSZLQwjFSFwv1rqZMc9jxy3G7zNUfj1rkiBMh",
  "key35": "2HdMVWXN9NAS9xwMo3vUfW3N2fS8aepA88mxqe2AUm1YsJAHX3j7Gjv4h7Q8zRCCXbPnJwED5hgsrLRGhJg1iYE5",
  "key36": "2sSb1892rTJ9zJiVH4f8CPKqhffq92Mjbfimz5EpsLCtbMJxNmGUqpfR4rcnrLqGRnaH958AQAaHizh1aZudaVpm",
  "key37": "2zkH65NXU2oUVFsRyGeFSdmBqEkJMgZtyMXbmqt8SYi7iJe9aJis2DNRoTEmfg1AqnMk92JvAevXAgrMs8CqsAj9",
  "key38": "5Sni69oPxWDzb2qPkdyWEjwgEyrZApLQyikgDw5sFnWRfZaK4PZqtqXTMuyjeRe5SvaePrkKc1nsgpY7xu1cfFw6",
  "key39": "5LWuwGtn1LYPuHFBvXtv5aaDFKB43X1ahp8bcVNpfnM9dSc2KMJykpUW2Yy7dvKMDeqUcGy5XMX9QpqQR1e6AKBW",
  "key40": "3ssPQ5Eu18QFwcJeimayZnLpYARVRp2kdWjccFFLys3djwmHkpRoT2zD2JAfFQ3Nh9WS8Zc2QnLNy2uNDSWmNZoj",
  "key41": "37MwBgbiZc8fK1z2iRh7Qq8EZp7tXHSwrD4QJCSvv3ksT7iiwySBXuQheKPQfQbAv4NHiVAmmoTSVDLnW1oC5Jys",
  "key42": "61SZB6yzZXpF3FjyF1kpcAdzPY9dUC1xdEyQcxDT7xv2J5njYH7jeY3mdTa37qTLQar36noxBPD2BPEU7S9L7PX4",
  "key43": "3Sq6p4L2GSkLquwvijVWZVczLhFHWLp4GqHsR5wp5gQdK3XYqD233o1kCDXs4a15NhXHGPj893FYB7gWBU29p9iR",
  "key44": "3YzKtZMJU4Cukfb19ynamtKWx3rKKkfJ177DMRH1etq5bHAXXqPkRoJcki8q8hFqh43uuULAhTW8CbncDuHFmdQ2",
  "key45": "3cXhmXJbMHgcCk5EqbSyspohJG35xxBerxkQ6v3u14SCYTLffHDk337zrKyhhLuRkHGg1Lw3gWwypiuiGqrkLZXX",
  "key46": "2rp9dXc6zCPtC6rkr1z5DskoVoWSbpQwZptFy4WFebfh3s6tWLKSQBNw7eAZToWVfreKUVC2i2ruoGEapXjX1VKG",
  "key47": "4bJQFmDVyFZk1BwTYw8qUY7xENPjH7W344Lx7PE19HZaEQjTzP1sarwdcAjoRjHfYtajkj2hghvs9dPEY4X6kSMC",
  "key48": "4J5ftKBQqNgLGEVjkiiSko1FG8vkEmsPuTB32HfRsXXphsbwpBscWfMv2o4dWTiWqjZf9rvCnNhJVkpUzdLepnCZ",
  "key49": "3SDegkSjn4oLtjH3rwxiWXZnK6rTDjHJEqz9tkai2A9fGxgXK7WiCP84tGxSLZK8gGLuPL1VfTN6xsZ7qoEk8Dvx"
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
