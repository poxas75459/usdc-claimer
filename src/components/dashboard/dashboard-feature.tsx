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
    "zUmeEpdmJFF72ykwAu9tENtCN1LRwBnzUrU1eFidtDP4N1GEJmrg2sQL66KgT5AnGeCJ5DkR8ujmweEru5RW6Pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YP5tXDTLhvZwU5qj2UzbQWvzwXwCV83GKVJQxvbX5d2fptTJKVAhzWvKZueDugTejNgPi8gQdVCjkpmkCXSiHFh",
  "key1": "4eveg7ckjLToqsEXVPV6RqhrNvHqxAgERSbAmiuC5C8X5adBANth6pqt9RJTpreEwGKGE4PyWKSG4CDNLNEHDrHW",
  "key2": "69Tsrc5rkP7nQ7cgUsNHgzowk4NVYQyoQxbyfJeY11M3gKuW1wKbgvZUkSUuN9yB11FnKS8CzzpWATee4PXVuYE",
  "key3": "4CEuYDWw8YLQc2tAgdA1gYS9vDAZZzY4BXoZD3UtGgFbrAj3wxVC3NLuGiLDBVkrWSQh15S7bHM8vuuERYW8ZgU9",
  "key4": "9HCSwLQa3YTix7T6q6C8qwZeMDtjrfmAcrWmSrWSAyGFQTBQs3jqBzcga1ZqjZrhAwjJe3thQPY3F7APrqfyWUr",
  "key5": "4BRACpCJP3RHLoBjnczxmmgFWSv2HUpvFzwrX13D4CucUn7L9jqz5D2t31caP7eSCA7a4D5t3mNtEnFafNBGgfmr",
  "key6": "336VgdSNYKoxvHVo95Tf6g9uguURxXx9hPFQfwLgMSe9ePWPLYAE2VuZPqZYrHpjV53TEWhPhBjEsQC9HfYGoAoi",
  "key7": "63CZuCSDVrZDTcankzzQ7dTjKZPM5tcfznDawWv7oeBFPcanxUac5G9rrPcejDuDToyr6TJxfAW4K4bWLgiELLSA",
  "key8": "5CxQPPwtVsgjimLTDM8F33FE54uKNZKU9SofyNEz16Ubq88kWXojTwTRW3d6bZeQY7dSQg2h2w8dXsogLVpR3TZk",
  "key9": "65gL2KCH5WCR4qtD9dNUgj3QsuURhSZidK2Knn83z8GoCP4UkcxWofFJhrwBBZycszgwm9PVfzFmh8eDb6hhShDB",
  "key10": "43bEpm2PrrRDXSeBe2qtVmUkZihiF883r8HHzTjgU5SDPkztpzRfUBmu33DrPiRh4iFwiBPJXrtFdqGK6xK1NFyX",
  "key11": "Qv1oRb4Qwgp1cFpgCkud33qt1WZMh7Fx2gU3oAmsuPmpH3xHf8EDpJ9zrbQWgawY2NKqEBjzaCsoohZuRCv539P",
  "key12": "241g2nv6jX9h9UXK4YtqRWdv1CXtXNZFrv8WWQtYdje2Qcibq7EsKCFPzETiGUsNXjQwPtv5itdVACQhrBMkhCe9",
  "key13": "2GH5tcSPXe49Sbphyjo81SBjEHH5rSx8HH56UzZUH8qdifWfbhTVTo8yVV1cvcu5aeWsRQDNw3G73nnq8arK45cG",
  "key14": "27fZFcRVg2ukp56m2S9tbT1ZCPoAqCxn9PkjfsK3tCiKgJQkEdYTgsN3FX8cgrnRYqspMXQJEEtST6pd7evHYmEx",
  "key15": "5cacPeCMhETspHfoapSUjtuB5GhJrTDX8bmxTKrg4z1H7FVXaJTv4TSt2j9tLb6irGyzXcvE9uasfkfZwzZ1Ytha",
  "key16": "4icNdnVujYNCVvVXYU8cNDTH4zgus9Hke7XFqz9UdVj6q87Kb8UfVZgyxraZKuggodp2NEMMgT4AgeW4htZuhPJC",
  "key17": "5sxw2FhwF2EU5qwGpbycKKbg43C8pfU9iMZsrR5fEEHhwsX3yhjdNffwd6PKQ3hZ6TEsksK5S9baW1wfudF9yTGw",
  "key18": "3YN1ncLr93yjJjENuEckX5UjNfLam5C7uYEhamM4WFu3zHUdYBNw3bTuUaEQX977oUrCDBk6CmBjrB1xbA7sgnEv",
  "key19": "MABhBJV3WtfPNDxS5SVr8RuKGmyeCFhpg8Ga23jk8L1MmsJtkkoJUx9hceCKdg2vJtmvHmEh64tid98ykqHeRYE",
  "key20": "fPKraFeyejqALefbPQefUuzEsA8V4YKRxDnZPGMcxyscszVS2bsyjCCcdxpY4EDUPsyGDUDHvnruknxxhvWYDLW",
  "key21": "zCX7eKW5ACygdZjuAGq3tQwWNPDNdCEeQTi9ZoQ4Eg8ocsN5uhJMeyX1VPb4eT6w57Uv6Vrf6DbkYkbS74NJLZY",
  "key22": "3eMoEVfz6xMn5T6j2ZMRDytcHjuySghERT23NXJTAn64ng9obDojBivYfCYqJMvMNq6HjHTSf47qHYy2DrdAd9Fm",
  "key23": "3FfE9vTrYAyZGqFd1K7rjfeB9PqGtot1TMDxppSnPhuqxxwEcQvXeDt9HkL4cpEidGE3jUVLXpAuTJAe8wn51WUT",
  "key24": "3YYEsFi88rdEQQha5bPbTLRxqVPRm5qVx9JdZ1CgcXtr4rZ6AQJhdpi3hmHJmb5gRm6DStkLgKoW1EEJK1fr9sbH",
  "key25": "3bgjYdt4KNT48ZRGy4dnV28Z1E3kfGUJZSHTADm9cnqH1yMhmBK4Sdos829CtLxBRD8cPadDk2zSAJRuUxA6MVNj",
  "key26": "57HtdVmdw7P52MNKX7XZYxWD91aZP1j4DvLkqh3Xi1cKzqNeMcFpYs4jE6h3hHYFCcGMmkxH89oW5ewhP2CHcpUV",
  "key27": "5em2wpEbig5k2R5Xbprf3oyfyJ3cfezHCGpgMYdLj8RN3jmaFMStZGjy2JME5v23py12dSonhYzucDjmtFXJ2QfD",
  "key28": "5WggGmg62i7shLkuiGv1H28SXjgwQAkWivoc8JkQHmXS9U1gpAHBoumoHrudrm7CCCvqvPVJTNA8BzFdvMZiUdCA",
  "key29": "DyHP1UHwDS4PQ4wfRWgomhPbGsxp6CzqX1VMi1jgdAZXFP7wXQdMaVJCXitUPiBgWtXb8vyUzDV8e3YJjMzoKNy",
  "key30": "3Wx6BfcW8MfDpGiKkxufgApJYSwXVyHGFSCArNhi2ykCKg83TCFCbfTmX4FF8s6KTn3Fweoj7pbWvrsJ2mPMgfAd",
  "key31": "3LSmufozY3rje92niMaVL9VvPehBhrFqT465SovCEAqa3Dt222u8Vv6BiXw2D5fH3RnuzddDYqkjwFhpczfQGcBE",
  "key32": "47G1k52RBrMeGSagpvAaJT1oeGetvRjJkRi4g8TJjiD7UXXRUGoFdqG1wUJ9yxjhoPmTnFPtbNAcpKTURQXYDumz",
  "key33": "4F26nvEhELC8KX8xDbgVbsnaYCeRL5jKp1Ajh5Ma8dZSMfeo11ZCby8WYz8JBoVKqDvT88957yiiUQL3D51BHSnK",
  "key34": "5vDkNQDKp1RxGmuJAjZgBnZZwuoHwUFxfgFgbFsxDXu3sW3QVgbyrCwfeqTSeurChQ7gUneNaNBt8QAy2SXByDSm",
  "key35": "4cGvQePq5AHTPJttiCnZdWa3gV1kbQ2KmYNzPPsR6D936mQ3xLLxXMz7nu9zi2kFoYhWrpYzL4PadNVM5ZmRazUH",
  "key36": "7EjGiXneZNnBGfS5r2AtnwKoryMUpE3qonhjmdxaBb6DGt5dSYLBPS2Y6M8a4YHF6pqzifWZaya4YTojfJ4oqrr",
  "key37": "rotLfgS96JhQu3mJvbUiKVZoYcDCmo1V6JUq2ajzN7Sw2PoapkRikrhKGQhwHa9SCdJwpXWfy1ZxAXLFsYsbHyn",
  "key38": "2cCoAnWvpd4Gs2rQj8CtJd8TaDo8Ln9bwo7TgyNTqA86W66a1oXhLh8MXgH8G1xEo3SZCzyuvEG6gxma3p4xTv2R",
  "key39": "4ipLqYWwMWx3hntqJFXXL9JN2oYqnrQ93dtVk9Uktf812LQVNgNuTyd6hGA2JgRvpd1HyLNAJRjhBvUrPuhughJE",
  "key40": "46LkTDB1kZ9GAbgx2D249DdCZCEcggQ1PPt9TMSDEU5jskdWAAt2kZhdtxtgWKTKxu9N1YTgpizDsSqCD8Jb2R7j",
  "key41": "29EesW57tUAfJtktoSLohS2MAnqMMYaLd4JeN4oygDTvxkvP33S2BHfnf5zd26iYV3KVeKYZWzEF4aw2FWUuUGps",
  "key42": "3yaab7Gc9nu7upMKGPQkzmMAGCVTeHNKGVpe61HEt5zyg6WhjiQMiEzhSXnodZugRA5R8waiwayo7t4ewnSQ9uK7",
  "key43": "3f36rDwWXBifkDnREi28rYvbLJA8D3QUQSFqqJm8pdVZCsAPp2Pade8MJktwWb9UhzkFRXttoMtnRTobsvhcVj9F",
  "key44": "4JMDD9dRVDFKTJB1PXQ2x2N1dhYSrLmduQ5eArwn3UGKtQCMfB7TFtmL6EQ7mUem9pcxHUjsJGrfgRZTzdoC5s7P",
  "key45": "4S8ag2nQhy3azd3hhET2Hh7kHuc8KnBCFYvLRzTKZLTcWJbs124YjXpTNGtXSygj58QD2K3kNRzr5znctj4u4fp4"
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
