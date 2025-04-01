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
    "SqzjyDwVibt4idSxVajZFNqqtVqAtBuXoECAKzPxks2d56FVVp2AKUomKiDE8h7GYAXp2ufR2fUQMnV52Fwe3Zw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ikwVHSckAj9zfRycnaxM9LKZpoMshKKLyKYokHJBpwsxs4px632cj8dqvYwYe8r5LbdVmChEFTpkPTCzHF5SF5V",
  "key1": "4eJwWVbe3ed3vuH9yHc6ijCb3kdzjujudqHc96vTzmRmnBjUPb2XXhAHGETEc2gkQKd9QB45kNj6zb4pBrGXvV7U",
  "key2": "3hNqvx7PRKPsseQ9VngqwM3Z78AM9tAknRQSDRktsMgfQmSuS4ee8Wh4zyQggCYgEFNrtHpcDqptN2rFbu6FchR9",
  "key3": "62LJzfLtK8FSEFE6RKqUBoMVUo1ewWTFDxTXQt7oGMQUHYGSWX2hp6L8EDfgAPNpKrkXhEN3AYD2eryu64S8mdFs",
  "key4": "5rCfyRdijpu6NGRap4iP9CuNXbDMBuLxokXmVLE1y6s4HTLCAGTJSzheX9BonppLmBwfv9gd1Xn9oKhsH6NtKtVH",
  "key5": "5s6MWsPReuqmoAuZSAyiEBpHs9T6gQqUqs7G7omSwe3scd5MLJohjQNqjjx9yRTu3A4jb2YvoLWoxhmZdPd1MrqJ",
  "key6": "4qny62n9byeaxaiArGEqVCjVCoujwD6rsRFUc2nSQznie9qDzySMcgyUgf53QBb38VNQ8cAAqhDn5eVVbNRPDCLa",
  "key7": "54w69eQUXQ2kswZRcZfrnqKHJJBLii56QB5HucxjPJDZgqHQKoTqiTeS4JkFruq1FE89LW1uoPW3pFKEmLiw8LtY",
  "key8": "3Tpzw8hXxMiyZAFS3Pk5E9HpZfGGioRMLVZsaM3tE64XrR9EgEQVWU4eUWU8oaknjYw54QsSSxFGhyGdeMUZVPSw",
  "key9": "GjLdNqqUzHSrk2QQKS74Ttv4ZC8xiqh7CArE53eWpwkdfmCPHvs4G4AxDyjpPfbr2PCAeP5vrnXMRLJQJWDTDJn",
  "key10": "24BAKx3C842EtuGygHCqtBbekBhwgseYY9Dx655VcXWFsxKM5BXMzB2NAXL29xFVWoh2Vp71X1VKujc24se3XCLq",
  "key11": "5hqdLUj2BBmp5MKd4syy57ieuJCD863T2TwAbLaM3sTvPR2EoWodCnzNUpBGbF9yNxCTzGt2mrsmAYwQZoC4FtwL",
  "key12": "3Mnsu16JJn6pg6Ec4AJQj5fgEuvUoJ4hXSH3w5J7sHYqQUp6ZFLPSBPKmenFNEYzSB1wNojFGbjPtzKj8b7DRbt7",
  "key13": "5qCEge9e6zTaXXJxXRcB6zZRdDZkbbVhTSkPpjq2vFJJkCef2g4aiXd48qRNzhaaL6rBRng1fmJpWLcaPW8Bd6Es",
  "key14": "3cJqAUoGjYZN82uxCauXAMWkrj3oQMBeqknUocVftzt1Dzkop9R2xNQDvrCtmLzZh3m9zfD3Nn9u71cYvnCZe9Gy",
  "key15": "g81zNBFDB7uEaj8ZD1js2b54cv8g8v5VZcGtKiPgp1u8AN7KvqysiF3kCceN3imtqYVTi2Z7sWGjs1FRwEAwH5X",
  "key16": "66b3pse1BvntkdXLCs4v78xWv1aTc9tY34FEa84SFmEtGXpqMC9kEyZQRwzTrWG6gwqdnUamiSggZx41FHzBmbBo",
  "key17": "3PdGZAyMK5h8BL9BJTriehghchnmw5ZxxCTnimYXRzMHykqHcWmeynFjQt6AgjYi21jwqX3kb6NymUGBhpFqKPKg",
  "key18": "5w6TbHz4yzVMTPbQLPqzEtkecEbFtaVsiVHN3tdLhd6bjxccG2YZhCQL1Z5KH5nao3GJ6fSuKLB5B2fYmxzURrHR",
  "key19": "M6949u5SKBsbXL8nagfnLHt48on8yPsxABcaDzBbswv25TZCTfVYfZcH53ivxcJh1UH32Lx7DvybGvJ3XTDEkZA",
  "key20": "5wQoMWr36uU95J8pngNLMJY7VhDgwG8U8nQzw4W5vjVTy3C2MsaW8Df5BrWiLsAvSf4osm6UacEyTkvWBb3aasKJ",
  "key21": "4YHsk4VR7FfJxp8PcpcYuwesfca58H8E9SYZLAXgDfnHaNAU3fPvCE7dGESB4F9oRrfgJcgYXDeWuPfjTugjCw3Q",
  "key22": "2ab6xZdwGyw4VUf8TabCUymk8822JdEeCtehRfbVSYAg5z3ytKFM1C9SFGbXLcTs7uyLPFfZawjqjKGd1zNsen4t",
  "key23": "7smNhBHF2uXo9xaPwcbWFpwZh6D1XnBXHSEhoYiLWdJPU4wFtbtzjYn6qV4G1nm8TdRyR4fkCJbQBcEundbifE6",
  "key24": "2Bt2FdF218gCZZmY46QuvnLAdCNWaMjDo1Zj4kpCB3CgdSuYsYic7hXg52f7Gk7m3ZiYaEMTfWfkirJrDCd4Yq7s",
  "key25": "3c5fY52XXFi7uPtK8FAP83msJJp6v1SD4ZFPMLrVNLDD7L6ortFteXHdrHBjh4vHPbqX6UeGkZFFuqRdGJzHkMbF",
  "key26": "36sFpcNCN6Rf8A2WiDcVcaG4UE2fU2aAdXisvWt5cNzEruAFZo5uQNRubWKS5PLnDdLX5Tdrt4VeEVioxXTHXmXZ",
  "key27": "5MC3yhjrot2JPuVTgqn6J56R543DLCzk3jtSZJhxSdLsLHfNvAwN2riUY5GBj43RGTu26bGTd9bUr7jCfcwwizW4",
  "key28": "3huW49wPSaiSG7WDSJuwwQXGU69khFDjKdGb4YvYUCdrQYqzCn5SVXj5e2RiLkQF96ePnazbszbKJRGd8nLiEPwN",
  "key29": "ufb6pj9z7Y8Zi7XKmfEJhm7hd1vdXxXobbBLr5bJaxzYqeuAPVgFbEdGC2fCUjbeAp8p5cT18k4ojNps1jPDPT5",
  "key30": "5Ddjj57TyRnNYyDLi1qZZE1QuptZG48aBY5Cd4XCNkAKNLFdQFgLX43WJzwmLusUuaHDxXdJS4GJ5TcATxSxssTb",
  "key31": "WdZbJNgWC2hg1z6FRmAcPUsQu4XYwffArNtDgHXPsY1Apo1PJ9QstvU9QzhD3qGL7tT679BzTupf5Ahpyz2xtYx"
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
