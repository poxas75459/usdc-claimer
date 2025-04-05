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
    "Gyk2iMJgt8mGES9fUAk1T2R4ze99nxUJPqQrkiZtqzV4fJCzprrKYpXTKC18hwkmLA9AeLysLsqgj8bAkCLPpyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JLMvLkuQgAF8sDDuTacDv9DA9rXhw4zMuqurRnYjoPpbv8MsCBH7NcxTWiPxS3rayEsz6Rk67Ax4qhaJYukiYDP",
  "key1": "5hm641tnUKUHxF7X1i1WSvAd62HE2LWhAwQF6kpu9ABkCdd3M7RXKgTP1dQKDe1LtD4ZAk2CYdhh3BQWT72uxBb8",
  "key2": "55KYvRyCJ2FSLHmKWiAYYhGxWL1Gs3aYpJK7sA2mLMtMYh5gmxwQ4NgxfdV6xHZnPgPmK1RqGk3yurYC5TxG6oqu",
  "key3": "66pnvfuYbu7t6mk1piyA1RKsu5skk2ZSFAw5kGZEgK8byjcTekYe2EnxSc4tEdx46KTwFr6gRFp5kx5bxu16QD7a",
  "key4": "QGJfNgd6gG1mxmVyWJYVt3oDFAAtswF5jxe2WrJoQDWiyo5aPaZkKzHrYQRkvQ685oTApoHMtFYRXLXQ5sfdPkG",
  "key5": "5Mbvhp3mz6etdLqZKg3Who4mcCxB6ibsgzZrexTDdmKFSRK64LQPuh3tj2xBxVVsh2ABYif5mTP76xxSbL1VC5TH",
  "key6": "NphA29CRkmpHGDaBiRwR3yTcQQ4Y46jaSyuQvsf73Kf4d938ziQPh1SumB9Y8ryVJvGmDVqfhSJdPaiNC3oL5XL",
  "key7": "4bgWzAPZ33tfA9RUuEFJkPMfAnSWyw56mxAgqThoc9bcAMaBwUc6sLgrv6o5XehMHaGvpdCGP3qaMMoLi8RSv7mz",
  "key8": "66TyK4FBBrkdpvVkrPnxnDQtrVfQTJCSCa4SEeRdoCTNbtfBo7kuNQvLsRjMD3KWrMNNbJ6yoNuV42tz29kN4Nhg",
  "key9": "3vn38JfHhR9ka7QbcyLVf2qNx1gJGmB7rmWLXP8QPA4SE6DCHLniBRjMnBMRnnSa7U8ZA2FHbnEpDNGYCXEgjWsP",
  "key10": "4jYfNcQ67M6Dr3moUn24AgUcJS7q1WiBWkReK8otkWiTGtZqRK7V4n7jbYgx4RA3d9LTTDMARCyy3drXtjGHrXHQ",
  "key11": "5ZbE5ucpz2ZR4d7qSKWtiSVa6gKESfdMcf9csDfbDg2qC6JWmGDEvGc1BWmuCi9mNjQFuAwckWYxtaWjUcsRtY1i",
  "key12": "2YfrdArR4WoMqNWVUBWBeSnaJfB4NJPEpPw3aEQEVesumeqgAvPmHhdgYRcEgSTQhX49K5JuaCAmZ7s8tctWHa1Q",
  "key13": "55deMqBdG4W2NdehA1NYtz2ck62cmh9hqazpTRGnuVi1r4WUQYMnx7w5tUdk6VZoWvT8uRejG6iQo5u3JNXqTgGx",
  "key14": "41RsKjtUXHjJn2BZ3MUKYoxiyydLLz7Zdbt333hDVCJeZhHzr6j3gBBLCK8pr4mYsfscVE4BFAayTgLWuxeLYjzN",
  "key15": "5qcLR1f9TtE3p5DBBiYoGDu5E3taGFaBuC8DY39bUuzWFiM294LYv5F5Gr7sRwmgTYcvndyBqofwUt1omCjNQKAX",
  "key16": "5VBji9tUj8xgezkxNp3ZHTFqfke64LPMLLNVxXcB98qVV6x6s3LbawzcH7wZAJywAseCmBLnXx4Xai5PPfujXGau",
  "key17": "2NaVfXXk42fhWJdoLdmJUMmciKD3sBjkoaQTGmio78aYy2YQ1fnWj7qPpZsCzPC7Xi8FVB3JPnj4Y5EL9hRkQ1Jf",
  "key18": "2Y6NQq2x9x4oCYyWYtRxb2uC6Q78s4ZjMJW4bBupta3c9EPssBkpSRq4F1MM4niuWdFbot9MDhuJSLxGxxxaTdbB",
  "key19": "2UNXtRot1DPx3v82ubye4SysEEsPdT2F1vU1n3eX1YUQqjsAcdkR1TKhJNUZynzoecXU4jbShqJPRjGHdH2NqDCk",
  "key20": "P2cw5sGWZRswnXrBnofJjHnMrfeunLrwMNuA9i29Q8k9cjrj54tmAb9ELNamaqw3vUXg2WUXhCXY1sGjfm4jMDR",
  "key21": "4q5KC61sMJkCsUwbrzb3zeeNWZ7R6fUKGnsJiUJvh1wSa8fxEcQJxMRusQPePCM9GzUc6gaFrmMmzonTVAz9Ckfk",
  "key22": "3Dza96nbEV8T6pePEVWKkDcudZYMUK5Sivf3BW7t27D4zttwoGBHwoSbWexbzKztwo4wtDQJa6Gy5JvEBMuLBpKu",
  "key23": "5rFRuUx9mNFtPmWtxbVDNj7321m4x4TMAqaLnaheCJvkQtHgrXX9mWhsCrBD6T9kiLT3QhcHGfzitTDeEFu4eWZh",
  "key24": "5g8ByxPrumzJgVKW7BMGP82EDZN1kLH3QXnXCFgY1wFXhyrvLvKq5SCsi643pau3KH1Qq3GPNyoc6TeLLcJpHHc8",
  "key25": "5e8H2Fo8kQBrW1FTK9bDtfs1aVMmDdH68vj9bhnhcTE7oy9cP86BqgjSex2dA6d4XCrKnwA1MGWazPvB5QQZaVEL",
  "key26": "ZUnmiT5ijXySH14mzzN9rLZQNN7LLDra3r4uaNAiVuYjxT1wJaAmgRkUC2pY7T4mSA5VHPzbMvRrtU4oe7aYDG5",
  "key27": "37aWmrCdJhngMd73ZDxtqe1Q4ifKmVvVSNPL9viqny9STdhSueYeWb9a458kXEA5uZBrbsewGh8PTnRNq3GSa6Hw",
  "key28": "3gHYTJQ2SmbiBkHBqs6vFXUFB3ffVU2b3BotJwhvSi7qTaMofBHXHEb5syEDYXUSqTR4CwXWiWkhN7MXDLRix7Uc",
  "key29": "5MmE4ZGVbaPfapG8PGsWDw1FNduYEFL2r6ZYRvjwHD5deizW5Y9BDxuTrEmxi2Ean2pHzJeor8Kch8RANSGqSdyk",
  "key30": "2Yw42uoFqjuA6FkBFkqff7UfYK2uM26jQR1gV1m8skboTHDFFNeRYhomf4oFLqMUbm8bKozC24L2cmuUQWuMDHrv",
  "key31": "2haFUbymHQuxXHGz8gaofqaPdB91PjbgabEj5XexthW1AiJqkt796TQyPQxxmgYe1qLvEy1sCajgDXa6mHrRpAVh",
  "key32": "4kb2eoQ9rmtBHAHdNbK3TXk8qRUaoBSRrCj6SmuKG9PjNmXVjwCiyhKV7tVymofBtnxY6byjcrsQKF5hczYRFXFN",
  "key33": "5aoaDFdkGUU2oMnJbunJmhtpk7Xm4W7u8rwJ2ALYxQVVNrdFL3tLiaqP92vvdLWcwuSNcahVV2iTuN72sd2moYw9",
  "key34": "2tWNtvs53yhsb5niCXNMMcAbV4PqQM7YWPBaweS63KAMjVtb9tuBnSDxmeFFHvuJoyckK2QHkf3ygLoYKAwLfD8g",
  "key35": "2ZGreE4zjpPxSWMnKPqysdzxwG7gHG4b2aXUWCQi7F6E1UXc3XfYooguvoU2p7zgH3Uz82YhdCct4GKGTSJPsusY",
  "key36": "5FWXmq5fpa6vE2tgJYvAop6NCdFiJ1bAsEfUigXfz7685FtamGJYLBmsdcmKmr5gf4L45YjmwnbvKzadweWUSTWZ",
  "key37": "2h3GbSjTrMMv6TUAQX8hr2p8oyxnC1DKopm5GjQ932gi6uc8rZWcCSBQVonFxEYsNovFjmwNRfJqSXJ85RGddMqq",
  "key38": "4pFhbSWagUWRnHGnL7JuC6DssQH4MXS8UgrnuTu4Xa1qPtL3TKVsSrAVyazUinoh2yxi55nDzPYbeH6P6LmdQD3",
  "key39": "ocs68d3uf2fzAoXWByEjaBtWHPeJJYgK555GCKaFGZxW22hzDaH4BLT9s8mxUJkwkX5tZTE7qCrkDps1wtzizm5",
  "key40": "sW1Cn5TrA5GvVxe7qkfQ4otgSZc4qHvNAugqH4e7r2a6BtKzGZk2wJtqvZBZYmXtah5cTfv1PmPp1eNAXVc6bHo",
  "key41": "zq21iMei9WgAYuBW7y2Z67fEr5G66aaG2EFF4dYWyoPJFBccmNPtvQXMU9aoJnAkgYTjoWthXnhTyvMYTxBC4jZ",
  "key42": "4c4o1E3UBFXswZjWuzrcMpXyPwLqGK9ok72NZjJTB16E2QUFkEarWKtjRHsnRfNbSLJU8axFcFf3uHCDzbG7U4qM"
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
