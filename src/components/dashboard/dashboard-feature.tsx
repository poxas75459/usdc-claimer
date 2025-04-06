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
    "5skEoUac5Csw9wKp3PJJqbRHgrXmyEC3bUKCQpM5i4hwTKudTBzZtWz1MJC1WvncK8AA5q96J4Vw9Jzb6uSHfBvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HsK67m2KZLAWhmTGorEp2Lm7oeoaq1bQbYvh6jJyATjpBjmNvee9GgbXdP4aq4bBG8fAfywPq2Avq5DBpEoSv8B",
  "key1": "5VSWJ4RHuCkJZx45REMbEkkm6REUBuxQzawb5KJit4cajqC4jRzBjpFKeNsShLjGuXhA5BfqLbSK8UbHp4Mt22fX",
  "key2": "YwtPSs2UohqSAYYFMWPSdJBZH7eCmmToyTyMwPXqtp5usfhefjDMxyPP2mUA52pc5Zj9U3Ec9NywZkDR2sKudxx",
  "key3": "5FrJTNECJ9BgNk6bM6gsgRAFDnXf3RnejW1WB9QfSDCFbaz9mHxaT4UKbBAE4A5nFQXKVz9d8NTHjLR1THLZsfa1",
  "key4": "4GQnkLbjgUJEekhfajpDqsfgd41iS4mCFWH4JV5wyuXJxeUzGBi3BFnuadWM56vBJzRbxTQepcxapnbVD4dWDzVB",
  "key5": "4i8xqvwNqGCxQkX7op74B28vfi9NZLNiWkvt4JMQEx3vWacCV7ZMYB27P8SpgnNpnA7b4nQJiBYW5KkGSwKJsciD",
  "key6": "4VqoTTt1vDTo2ygvwFTfnNSMyZWLMYYZcgqcuqLQ6EHe3vfe2PYxmS3EGg1q8wvYM7wJ9mLrMCxLsJNsCvApeHsg",
  "key7": "jSFVwvjbd3jW4kFSdFwDUWd3KgUaS7ob8rCXyBDgAbSBQuwkPbpAk19HP6jFy3T63C4tTRdapMSSaNpos5c9smv",
  "key8": "4bqNiTLRLrN2njY7WY5z7MYPoUXNsJTe2ssbL2HhGBPwdLRwVwF3LvUaEoEnWr7HpY8NsiAxwV5zLc9NzHo5cSiy",
  "key9": "5MdqrHVuthjQJHY4Xa3mWSXfuPjMrbcaxNKvgraKN7Bx1HRMRt2R3ecpCoapTqqv1y2KYdGJJjozVfEp8W2tCPz8",
  "key10": "3Pyvvs7BTHSn2sq3zgT6d7wTeViQAusbD8SBEhQBdPFjV2iiTZnJYPpVJGwvxdB7gPFryfccM9MdCGvhdMMVPkvg",
  "key11": "56HBzYm1g8eoWBNK5au8wsaukkRmkCuanjS3ESSGyEhV6YBWqaDdgNTTrtwTHQ3xot4AUQSMyfA1SqeTKN9kGpbv",
  "key12": "5FfxLckEVLmVWHDkLvf8brx4uiRPnEyKpSC88HuaaYiHdMAeUmkokWP3ETYwy9QEzqKNFwqB1JSZhS3ut1hJ4cHN",
  "key13": "TTZ2F29uzi8G9iBmFbS1sNdjCngBE1VdnnWsqLtPMfkVUuJV9my79Aad6VZZDrxovM8JKxwYaANvUhsRmaC7Na8",
  "key14": "4TQBiSSi2rFP8N3gX8bBxgEe8Ww2cG3xYSmGUspNWzvXfi7xeeuBZqkpAz8AfQtGYMVaXw999sUmXJpmhAUkyk4V",
  "key15": "2EKZasyPCxLfCRamdYP9hffZFTs8A7WXfBDWj7YuCMyTF3PkyJ7Wv77mzGSGRk5Lphm1g1pi4eXYyXLPSWUZV8t9",
  "key16": "4WdYtg18mB1brgTYT3bSAWBmJQhkQxoZHdwn2wKvxUyXr4Jdgwcbq2UE8he8APqFyUGGx4peTy6bNHEaGmiuq7GK",
  "key17": "47EE3qYU1z3T7F6jy46ayhQBBdg1Wk4Zeskzd4AvKnwRboqw4sAbBzs8jzpNP6BmkUJtKqZqYAJhidVuxjnDotdo",
  "key18": "2Rqg9HX4EUC2ckgCKmaqduz1iKpt2GsV62mN4sGfGFYJM5iJGze6T3xc87Nx8HTeNo2JSPd9WuV2TitRBwh9E618",
  "key19": "5onW9Yqxeb8DZ3ZJuz9zbXfbpkCrMUMbBEPAnHabVjS5XPHXfyXkY411AtpQgbBCqZ6cSM5WTjMGEQ8CUE8FQSuq",
  "key20": "36DGTF28exxZbR9xG9PbjJ1pD6d85ustjYjozBNNFq7wZRDVrrmpSM5PYYbKoCSU5R9QmHc8ds1dzbKhn49Evvnp",
  "key21": "3WrAbigKJNmCCQjK2phBRqZNje8qJjqnYm3tbTWicyydUvWgXEQaB9JUnTHsVEfp5XfddogT71GE7eLXWtGjy7oX",
  "key22": "3araotvcjTbh62Y98wpJYewyjKp54Znd9NXvTNWtuPaSASL6VX92V31nbb1yqDPwzpG47RX8TPdpqD6yJKrghm7v",
  "key23": "5x4WPSDeFdz56AC9Be5dVQZHmRhRxQoDxBvA3gGYnecd64ZWnuGQXEX3Vj1qEtuW7zrsCiyxNVnQQFiMFdD1Y2dg",
  "key24": "5xj2S8TmrwHBPUDkpFs5aUbqBu1ZxprmX2P75cWFTNNvqSD3pBcLiexXfGYuCy6pg7Qr7Ukjhg5QPEmxLFVf58vK",
  "key25": "5VgrL28wvaCADAUgAWN3vLFiYhdFbcFTGSF97aXsEh7t4Fy576vSf4pwpEoFVZKxAoEiQhsBNFrruGCE6XnF519Z",
  "key26": "rQKVhgvqYozYbTu4Vkk8BxCj3QncFjM5QC7uJ4Tsg7Etqs3n1J3yvshQmJC9wQWfR273SnmuGfVMdTbr2woY8dh",
  "key27": "3QXohixQ8U7qnCVysboL69iWTuz5bJ71Ryr1KmUmDthp5y55jZSX4pZeYSdp56Bix5NHCPBVYmy4f95Z7CoBxV6N",
  "key28": "xzaULBfzdstwdeLwB3xGG877xwGMXmKSw3BD9xpyyipmZafXr5Lei5YVo5oV1mpPrC6vromLgAefJSz6TSaBpVV",
  "key29": "2mhd3rr4uMdb813w5UEQc4ejUz45WoH9it2T9VTvTir7DqzVhw5UDex8TRdzn3YSyQCooNZPEZUJawrovciiq7yT",
  "key30": "q99PVnAe7zUR3h49V7F3QcUHssJ6tLSWPrBrBuSdPM3wXKhSn9ocLFDYEoRh1Wvcd5mpvW1pzbJPi3Di3qjaent",
  "key31": "61rgt9nB2Vs4p5CKZqavYRrV34afEkEGfWiixmpEMkmdhgwFhWJ2NNv59d87Y6kh6yJCDWodefeQhTrgwtsye5gR",
  "key32": "4oX5UQZSSJnKnvbReMrgDK8GDbPR8gHyUuHE9LK4nH1hf5gNgA6jv1Wonv4E4dqMfVu1c4qwMopB7z5EWKGYWPfz",
  "key33": "2fwqmn6re9W46WAukXWAVEsUgKSeYikH5tvGbTBwhi5596jF2SjTWa8bZJNRzkL5vaZA3nWJX8UmNAQtrStiMFdb",
  "key34": "12o49guH5LpKp8Jqd6JHeGjKs8byEs8nkw4jJD87FWPgwsDNM6PTXjLZk6XcaxbghpctPFnWncCXXQury4Yw8xr",
  "key35": "MfmRceVmXic8Aj7gLV3bpp2nQECLJEXNDb1tHfcLYqdRMxzpqq1ha6mv7irtq7GsSmQWB6idvU9ReVRQVLwwZym",
  "key36": "56n4WQqVLLfcPCDniyaWQPNHTQn7Xf3N3GVEszkbCzr8KUtTj5XA3rHeWhf6NFqv91HCUH2Nx6eArMK3aK8Bhpto",
  "key37": "5jJgqEF1uTS8zdRBx1nzvVeduDLVUTEgLrrax9UeX3xfxqd3uz9YK3kZFiJchCLMc4jDMArZmJeqAZZ56bBTVrN1",
  "key38": "52YgwWGn5bHLVWWMRP3LiH6ancFTWyXGeix6oiY1aprNkNWNgCnanWnKZkFPfCcuCFfJQcaB2LRig1iuBm4GPC89",
  "key39": "KvHkYsVss1YwaQRek7Z3s9Ep1HkCm1dVN758KgUnc9eHJoCGi5P7SQBPCUTYjFf22a9A9QN2g9ZVs4wvwwCdcg2",
  "key40": "5sCkDSEkoJ1hBuUCTFnzYdkN7cGucxS4F53Ro7T9MsdncmNTqjjVdLjFGb2LRdVWi5MMKMNGXxvvvu8nU1gZCxut",
  "key41": "fE44p3pU3XMz3dnLgUJzxpEvk8hu6R13zGhgBEaaPpELcK7VZEJTpSmtPi92nJihgLUdFtbHcnPTfHMUe3EUpra",
  "key42": "4BySVrN1dBDUv3VMtPqZsTQJnmT6o2o1MCTwuSeB8uFDPJ3ENfnjg2sAJjEwdTDhTL5B2uRFCjVrvBxf2onCVrbs"
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
