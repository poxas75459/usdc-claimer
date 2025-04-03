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
    "2foJcRNx1opoWio1qymFFXareVD258HyMoJtQMbJuDFQnR2aH3qKjohV32mcYinnpT8pUygW6pyabjgRJQqqp89D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1C6UFeJaizfbr5Csb61UALrRS7uX6TbrS1QQ6RkvJbdRJhpxyitezQQAFhgCdqEeFdV5EB56CLWLBCf9rEPv8pc",
  "key1": "31nAVcnECFjVi24zh1MJmyRZsoTpYuGx29f6nF45ZQmLpWAiSAiCQxkA83Zo21soXFfPSsws8mvDHMft2G7baiYm",
  "key2": "5tFGVxsWBcFnmAGgKHwMe6h5VRZgCLBLiPKu7oE4VX1UXmh7J9PRM153Z6oQgq4oQ2fZGbt3CSYZJgGMFigVkezT",
  "key3": "3XNE9zSvFx1gXKp1iG4jwtFPEKjrKx2dGPAbj4dw21PtCpsrfe7wjJEUYbrNYuDHpQpp1VE8SbX7w7n28rCgLqQj",
  "key4": "3k3faLsD2AM3JLLFCVmCYM9wTynnDky4b4vY226erz8dUNePYPADEbcBe6DtofNvp1R1Dh7Wjk9axhgiqS55NaDj",
  "key5": "hZ2jNQr8BU11wSeeizFa3amVcL5miQenbeFGnu4g9bZn2jTQMSEDaSLr8Jzj4DcjsEC9jdvAADTJ7DT3852Pv7o",
  "key6": "2u6fzShTn2n9d6UJZoBffeH1Hm2BXFs5qYrbdCo3TtAXnYkyJ2XKWP7PU3KVMbDWHbp2xmMuxBNR7DthncXcrm3N",
  "key7": "3pMFiunuL71HSs87i58WMiABuFFBdqrSf7dc8J3hpWfXfRiMA1eLAXTR27BGjt6jNQZccygQftTygbT1z8DDPRbq",
  "key8": "4eq2UnZLa5xSe6425ZXM5xEQTVWN4DPjTA5HPeugHdUucij33i9Xggc3Hq1UXNBVnZJgDkYj4AvWv9RXzf8e462U",
  "key9": "5Cy9YytoPTXYHDTDPseoGsBWFEmimRcjJzaBdhWVo4dpdMNxReHN1YQzPG218eHVUsupoDB5QR8egc1vgvjJpjSG",
  "key10": "47n88HpAMRRj3BCbuWxhYnGLNeFKpBFXEBLpY7TageJ1xDfv4KgPPwyiEK9tFn3Lmaj16Thu6VWFrDpFc6hZx6fZ",
  "key11": "M2aRsecYBgF9pFMG7VNzBp7ncahuhKoBsVPuhe1hs6X1xjj7JescHE3ysoFapqnv7ooMRwbamgTTLMgrLzBQCPi",
  "key12": "bG3yRVLZJXq7GZoraH37efHzu7cZj6YBPii2KG5kJEHuTk4nRhtGjTxGJcrDgyRnygChoFHWLPr2SNpidxr6WRX",
  "key13": "4L6AtyKhQgrvneipJQAnQTNktfhUtoEPq1ffgto5Je2xPhKpTnfN1parsYbFT2v88LnjSzF48fZntgU7m7Efpxvs",
  "key14": "3fsGcCXE18Gqr5dmuwjddshPxsHdFBQVN997Ue5fKHmCwUZxPAHXtZxHHgk94t3VF2keJ7WXG5cJQ3JmVJVQbBxh",
  "key15": "3Q3UrL8FEX6zE9F7HZyzMWehy5vmabvKFzwvVk3SmTvZidQDNfXmzrpV4JUyPGopL1CKb8wf4AP4ppk4MQ1gyggo",
  "key16": "385YdBuh8PMj3eFr4N51MtZqjRCmyAPWwvKynQY8gfnJzFpdhJkiPvSbMTTLYCoN9pWPMF488kjkpEYvnkdecnhM",
  "key17": "iiWS9xv5mGahHo6E4G9XgMj8g94kifDht68J1eCu8txF32QLCLdtj3D9b8Kp5SpoGFsPSpKBcqEiviBUq91SkL1",
  "key18": "34WyjJVhCRcZ9xwLcatvgiLwzSD9qFgEXvU8mUppS7EQjQReCi96BK32QHTDyUb2Lfoe8CgSYTfNJ7zzwNc5oNa9",
  "key19": "rJ5dMnFfgSvcX2LuoRRKnyoBKKuACsKF2EJ1z3Wb45PE3L7jwjg4GTpXcZi4MTZossraofapdYLtWoymVo5XFpU",
  "key20": "5FEvmaBEdHzfXPL5LkCuJQ68HU4L6xhh1jyS6uucKFJJB2FNqdzRVWTJnoWmrrYruR8pd1EcwhH5VkHdFS4f4UZq",
  "key21": "2Yjt9cwtST9jD73vUALQu1DPZ6XRnLSixSTAmLL8FFDMyJG2muVEahYnr5BhKDyPd2u4p5PFR8TuP43j7RJ4M7fB",
  "key22": "5K4UdAtsAdQEDXg7cNHqzZUkdeJJ2M5GDwesQydwbdTcnGLSFGJZGg7QmwswgSniZ3NmMWSkxTfKJbBrizdqR4EA",
  "key23": "qEGKW3gbkWnprPBKD8oFsRqpxPrEMHBxSWVQmNLjfmXnkNWFjityNU1fFKAR6RYqjSrfXsUNPGfzGZraaYxp4VY",
  "key24": "4zx44LjwSYbg47GYmv7YCjxS49heeZjvRGg7Bv6bwBtftgRiEVi8id5UrMfQaAtqNv3ivZg1RADUDAfjr9D2oSpQ"
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
