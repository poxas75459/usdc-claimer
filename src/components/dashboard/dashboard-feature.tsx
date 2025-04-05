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
    "4uMeQA5EsPUodLmbvk9kh88oLsEdVoVQFGYww7Y2pgttRpJ8BgkY9MAjc7ByPd7TG1xbY1nXSxi1M27XMDWxR1qe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58k6ZkTZQtbL8hTV849tBtygS4vb1fX1dWsxJvVeW7VTiMzULYdzRYdcb2Jc69FypyP4AWwqNhHpiHU421jnNVAq",
  "key1": "fYXR63rX1zR7TEFMHCf7U3HMHHN41u372FVSSqr3yxrdHow7JT4NXBDYi7R4xK4SVgEJZ1Jqq5m1HUEbbazspTX",
  "key2": "taNwj7Lz7t2VxrjjbijTHQYmodpfLYbbx5jj92hMGYGGaxjPS7ixTo1FiLPftCvfSPjLDSP9DXcLFDDrzTikXvJ",
  "key3": "322BcpeSZEsskgWempmAjxZZ9CqUy2U1YExdUzQThDSpoGoj21GhkctVqGKRuA3W7qrb1bWx4LTAic3U4bjhmwGb",
  "key4": "Xv2fksrmAFymD4wBiNZ1bvyxC5WFNv5ofoofjVh1Sf6ScfbM37Zn9y5t6sa4tKY7eFoxiFp76EkKunbjhzx4WiH",
  "key5": "DmNTk8MjLUK9Du6LoSump4k5K7aS1xu7TYenYit2Qr1EJnmjd8WsJBbZhrnzCkaoqsC3pa1isQ6beCc9B7bHHzn",
  "key6": "qec69avZiNQS7rsoma8MCHFhgStVSfCt2xsJs7XjnoCftenp35AWrJ6Vx9cipGTPR5NPdQsnPZBgBQAPBKiBjcQ",
  "key7": "iJt9PNkM5R5iskjdJQvz7yE378qad7e9axz3EmAiZuHvHSe3Zhpoopv2vS5Rwmg31MViusK6ZHjRK7jpbM2vCV6",
  "key8": "5C21sicqX1tNnnMoNnjiFQgELiTA1ji1Go7FAqRPb1mVFWU29Z6WDVSYjZp3S9wNJ4HL9RZKEPcx62ezTaPFZoif",
  "key9": "38yXY5xHGAf1UgxCQWfU6GmmLQQwaajsAc5yzKTg7fbwVuSnCkSiYSjK7XtVU7g3foenxBgb62UvNDMkLLThLyQt",
  "key10": "65GPMhEZDsBdujHUC25655eHKqZGJYAfww5LdyX7FJRB9hqWovzdQ7twPGNmdFywhpMDj1bvv9aNHDazjQP8ehuG",
  "key11": "5toC2vzhuTi38FrqM9c1Y9NM1hbiwdasdsUoq4BSaidPoQN8QYrcKnNjqaWeKuvVKoLiCS7GaLTPDLqnYrvy8gyV",
  "key12": "3k4MhHDLEmgNMbGXhXQKqkWUvRrJ6JWSrD6h95weU1i3NtRLp58fNt6nPtLzPnfkrdcHg4PXY2PtyZAiR3E9N6e3",
  "key13": "2zEFijCpxRHCUgin6Dvbchh7eyXrJ8nNHexvitHXTNL2iBr34HzVoLYaZS1AWLzaBbU2APckrdPeKTznmtjgJKfp",
  "key14": "3VJRCn3DDWtK2L9XtHy3M6MYgtrSSSVNx328u8JBqv2H8aLGouGfN4iZF4g7bbQ9uRKL6MEsf9gPHxfMpC2dr5HZ",
  "key15": "4kQbezYhXf2bS7ZTsyNCjC5WgkbVMcNnWR877dRRz2hsgfiKWxFwZReQff44nRtoFkXAuCxUes4zvqzyMRdkjVbS",
  "key16": "62VxDqdJWP44hWidbJYRhJXCfdiFpPwuTRCe1X6CMdCHB1erJZN5hmMtVy5PJW5Qz6YkEPwUM6VFHxxwAxxnnNyG",
  "key17": "wr8TLR68h67wUP2wwMzoJKZWM6WSLbVZwbuUm4UcT2Qkj1XZC32tno3f1PzsY2i2zkDAXcKAKRvpTJNumaK7UG3",
  "key18": "61aotP1A4xXRWKLShjoiYmm4Mt9vPcVDMxRrQtcxi9fzKQjmySbWRKExxdSK5CLzFKw7D6kQHvZ8bvmFHMu7LajQ",
  "key19": "2gCasp2DFQXtmkXMpbeX2zk9YRQnERPYdX5hoN28GVSLHVPaMjNhzAt9KmtYmhfscyoC983iiosrzpLJrq6c1Dqd",
  "key20": "U2EPXcPCyYEmwP18fp1spXMo9yD4oqZe97QXWqQ7B3CgdDaAQTEx4VoYsETQgRCdQg2VjpH6uZwFxS6w9sDRYyX",
  "key21": "3hxQpTk5BwWTepVodG4MpvQAjsjxQHfs6g2GGb14TCUj1UazKgYt71RhWgXwJFVuD3wgQ2wVCPNj5JGeyowJHA3i",
  "key22": "ZVBFZGXiGJpNN6CRE1amc8bTYTLB8FkN6SuPDWbNzpTPjTLwFbmBeEU6J3oPp2D4ToxyyVCoRym16AsVsTqBCTy",
  "key23": "4j2ecfHKnoTEnVpwRcdr77tsais2SKUPoyVCMdgVBiehsjkEm4kG6q41UjzDkNqVzua9C6MMkNq2CKxeLEEQmcZg",
  "key24": "2Ht1P14HeC89pNcGjWzXVsHNmgR1HGsZmg9kjBsXtjr1zRBHtbSB86T6NviACX3XD5QQ1tSVoyizpmiuBwAz1yeb",
  "key25": "5H97H8s5S796oCpZVNxADdAB8BYYz8f7iqVKWvTd1FYjakWms6iZYDqBgVAEqAWzRqewzdkf51AoBpGhDKgZoaqM",
  "key26": "XJD23m8jtysR6Pzkc789KECFLnKFEdpXd7u4bBtFgWudCNudEWQe1cFFuHxrz2v4MR5P7uDY3K8F6ZnC2sgnKn9",
  "key27": "2fBFtfPg3pjYhvS3A9vox9YMYQFQrEbihiipsuZQ97nsa3YhrL1LVir57366avtjZi11rCciYkxPkLrwFaUSFrFP",
  "key28": "4XhfY8sNyZsGmBUctU1XkUh9TNV5f9ahjpa8MefNMxBnE7pBM59tZGGa7aq7HAwyAsLH9XistiY5ohU6gYZ5KSAA",
  "key29": "57xZ9BnBVvRt8cTQTVUicGqSYXsbXbtuDTGEEyL8TkrRUJT33vEHFotUWxHhA7czALyEwFDAL7n4uqKXHyK7o8CY",
  "key30": "53SfgtHTR2dmyhFETrxLtX9ZutJ6R8DG6CftNhm1bPYdpgtQdspToAdHZchkzd4vxuFa34wcTBoge9tYkg1bMNvn",
  "key31": "TJ9Q5B6QSREZoKyhvHZxBDnhAuwG32FbD2y9YeNpspi822eQobBhsvCYmUJaP4jXpqBqkvvPP6VennaEVPGJvfm",
  "key32": "s4hsxXgdeQHciU7uPyXRL7k4TtEuCGn3sSpZAo22LH24KvEbFSJiPBiRf2i32eLsUtexkBiRCwCdSHN6UPLnYEd",
  "key33": "4DCMdEvBUDSBYiPYLuTR7eo7ULRQrsHv62f3GvKSvh5hS2EXJL2eYTevDhw5qpp78YHCXBfnnaGY2QMisqibkCYW",
  "key34": "4TaTHuncumEJ7a3vaz1BU8SDDb9W2zBYHaLqihb3vjQC25dqFkDdrj4KGBHyhaiSYEwZXgpo9yF51ZMLSWPWFiqA",
  "key35": "xg6aWgUmYkiDed9CSrAJwYZsSJANGqNkAFnJfrzKFSQorGhrsG5j8yfed49XNecBdVr55CtkLAausKPq96ant5A",
  "key36": "hsgH31ueGv8mTezGKoFZ7y84HNZutmJWe2VKzDC2S81d5Tx7jQzSoAmCxKNW278DGTwNS2JWNnjoRmkgR2kkTTS",
  "key37": "4FcMJbE2ADHV2eGCSXQFrezboUB38Vf7qic6NuxTJT7vWqxyRijeFUT6qypSNtrm2Md6JUuK2UMr9vLpggYeYivx",
  "key38": "2BtVSQt5NSWkXe5vYFMSL4KeyWpdgrLhijq9AVQYtrwKaFd3nNZDvKLyZgtVvSXQiofwaLCRC55rfXso8geLRxpA",
  "key39": "2HsvWaRr9HVtkyKp82CGmrkp37fmLzMn7xFJqAQbZrULRh6WUb5N5Tm5xB5qqQacavyayfRNpyFYqpjtATKRTH6D",
  "key40": "2QPo2ykSuimNMfM1TshKSUWjLX1BK6FXfxRkeqjdwn5fnPWo6CzbZQrsXxehDG6WDv49SZZtk2LksyjZLWzZ2LSZ"
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
