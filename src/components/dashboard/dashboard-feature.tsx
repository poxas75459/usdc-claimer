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
    "2C35Rdzao9EwrXjtyhiqzw7yALfE4kqRg34jg4QgqSr2ge6qtUp8167ixYrp8vk4r28Noxj4KwussPxCQdzyVv6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aX3Ai7gDFGebpARLSjuN2gGCnj8nng7RtT82sddRfEcC7jDu9Dx4DFNQc9MafYJmHDLy4iCDwQxhsEsov89rmyJ",
  "key1": "54ZvWrQyVHyrkEovQhGWZ4YQJrHD18qLe1uXcgZMjUBVgh99MRXthhiz2Aws8Q63vHBC2mpZStA2mo29Z1EjGYpc",
  "key2": "2WoJhZHyLQEzTuaPVSBD8KFM2DapBQJZ8fPCqEPFcYsEFFS3jPy9hf9fHsmtwp2RULk4Zt5bjVBFfZXeVxGt8Xy4",
  "key3": "2HK5LQJ1ER5EEQRGoBTKon2hxWu9dcXT5Xruwau95ruqL6sbwiBuKk81bjj1TWqAyDqb2cj2AsYJebLKdgHRCuoG",
  "key4": "2zweXqvvqL9aYWF6Yg3EcqqRaDrFqDy3vdnLoZ7si9cm8sfroLHvAjjmax2hpjwzi6Jv5LrbmfCtiELX5rW4SRVb",
  "key5": "44PtrBSuvfmawhBkTTnjFBAoBZZfF8hqpcDpM4Ke8cwx44zZrvNbJmJxr2qNerjRbcGyQmNTzcTe1R8QHwjLmGfW",
  "key6": "5nwq2Jswubvq158bhQCHWQxSHSHcuMD9qRwT1FWuWf1uZY7TiScs1xw1Jno5KxiygFbRdzXmXLpEXExUSaZo9NnV",
  "key7": "LDy2AgQgYGFfeTTvPzdyc9tJGnqm4wjPXVrCb3gXXjMXKpsNiS2HtKKRtnziDfX8KWQn65HXZtLdkPj65cjPJ9Q",
  "key8": "2EfsgLzh3SGtWfTepheqe2QXnYh4a6RRn7wbm4BpRaEPgwvvwf4XxKzenLo2YeufHLHSfEfpFEL3xeZ18ZuRtRCR",
  "key9": "5sz9KTs5zDX8ajK4DrPrjqwaDr5c3hPR47qsjaoEzKM167PJ5dGZ5WNPstkwiWyE4hW4Tra9EKbsN66u8Jv1DMCm",
  "key10": "NctWYZLUrLCamPuXi8fUdYQ3fPwcNLFCkqzGQkhF9e58DeSswPevD6ymjtGnubpZdqjkGTBVXdwvLuGGLD5JgHb",
  "key11": "mKgFHvTdUrz3xroJyjANji9jXPAQFDiSKqkNfe9bjEMKoBEayAffWxuR2YLCPBZsLNHNLTMuT1EBuCqiVh1qLH1",
  "key12": "3LuBritPBU5ornAq9aeCD7tN7MDnREf59SnveMkXBZY2faaRAusrvLafgfSqC4rk5ajBNpGDySKSNMMoQJPu6mgU",
  "key13": "2E8z8EVByzXiYtxa8h4ViShXMV4suxQNKXHrKQHnBknuBn2qkpkGSCmwDDTdr5vNV3mv4peJrGmJa5XGtJhEkW8t",
  "key14": "5DRjHymhND3ep1J8dVV6EkSyFwCSUEVz77ei7etL5qRN6uGJmBvVMCcDntjcxNmSqAqXH57ygBeZJPn1zMoz69vY",
  "key15": "2kXqkujKmJaCvowLNN1JnoCJ5uz1Mowq65FdrHJkTzcRQoaAu93cf8qGQLf4yBRXHMaFxiCGex4KQ5Kh74adnUa5",
  "key16": "Yfd8pNjgqTPXJAHU3uYkDYkDSmpnNrw8nPL3JxevikrM9qWRsYCukiACRyerpZ9TVf8cwuinqwYaTw8HvLNcREo",
  "key17": "4j8AVcPWgNv2SYDvPDUtHgGUbg5V14oxhNVPvCJgPbQy9gHJns67EPmgmMnr7CtMSKPfKVBUDQRPB7ztmwaG6gtz",
  "key18": "GYrVPrhDmubx1zvDRoecx6MdKi7NpK5JzPMV35KLPUpB9g9mSrEWG4kgdACpLqVA51auQhL1yarinaYVTE1ao8Y",
  "key19": "5ZbxDMMEFwSbz6BNe4rChqG1EyAfk5hd6DxxYqCFJXU98XDfqTbmri9hJKnakz5kdKmh6XNXePnQGV3y2LAMwB3D",
  "key20": "5kSKb83tsojpxQqKBP2kHRH1oqHxYFNNeM8KGDtbnSDStoCh3Rs2gofPeJZiVVCNh4nCtE1EAedctWjQH2CBB5ms",
  "key21": "4wVMFjBJGtMoSLEDqQjmbd7uV8bcnPCBJ9eceUjLfwhjfg2Jb4LXRpBFd8yorLGgeAJmCHmA3GuJiwg5dnpcJwFB",
  "key22": "2wuFhRgZTjoH1cs4GTWz5sszDwzMh4WdR6cJf9UrwDzCp5VzyEFWPP24F3TmzELd6gGe8e2TUhaykZypWT624fNA",
  "key23": "24jHRgbReJBApRLJhnCV71hTgUGxiNEwirXChw8b77c1hEFP1Tkrt24UucUHUpRzKCvD1fDYu317F8J8VDkaJUXv",
  "key24": "4n9aXyWL8BxwRSaJ5AhLEsTr2rvhZ9ApHGgNQYPsebFsQZJLaXfDghYp38MjJ7QKufrVD8qcYaoTchkHWzaQcVsu",
  "key25": "5Uah6dWvsA9rJT3m3ff3WTv1UMy3i7tcGL8qj48GsVz8CmRde6UpfeKptWYgS7P97d5xWQUX6eEvGpF9dGoav8pA",
  "key26": "5xwvM3SsEEoyeWPoSrJLmnq1b6uFLeWfHTX1QbjnU1Fx33VTmNfVNQeAciVXs9XcgEj37Ee1V1NLLiGJp7h2Q74F",
  "key27": "5kG5KYi4fJMJaLkHAVChTnsEaZCPuC5Bb3d3kG8Ra6edDnRijCZx2bsQQQKuYo8pjiAmAigevXN1oTsUyUu8QmLV",
  "key28": "cMCLzM5yz3Uf3F8uZYWDdDMUcn4X8D5ZHBujH2Gk4JWnsCWk1Hdp98uNYmo5NjfzdkbmwqrYvpnQ6DwEtdkYXqx",
  "key29": "KFpg769mi51auc8jmsRCh3WiuaooXU91bXqeToavQNq8cRXcrXz5MZYttAFHzCXksQgwq67w6RKnLA6Th2TKEM5"
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
