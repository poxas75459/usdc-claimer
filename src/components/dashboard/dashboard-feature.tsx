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
    "AHjrDbjSNJPdpBpX8TycKes5EemHicyfT1u1C6fzGzSsskog69nUQ57GYXGfcBSUKhJmmcGWRoxvjUbBJgnJque"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eKUkjiAVHkMikEkyPK4XFHrHm4pvXB5pjgnJZkTLo2ytQhcMG9VciKkL51zRXy9x6HH1Q18bPLuno4cKrAaQ8eM",
  "key1": "37Bcv4obxTXgzzZx1rzQmi2YhicapeUrtSRNrjWnZFqZokrzet99FHKMhwoZBUH1pr3c36NApAjdgA4Bh28ecK36",
  "key2": "xXokHUPDGob4cyvYi7MpLEHKsALMezh2qXSdKk7apKUoxzuu99HdTen61PvT7Q7aLov4CGSQMrHknEs7VcLAYgA",
  "key3": "zw8mt4xcvLsSGz1h5Ka2MCuSqLP7XVFytzRnfaD31q4x51dp2GvLB6raCZighqJmp5nEJp9YDR17ykKag1F5onm",
  "key4": "5j7kimzSrDoqzP4kRS6VP2LJg1QSjM5cgQCeAiTuh7tK1YdqrtuQxaNWF8bNBnimCnd8fD1vyKCgjH5Q6y1FmC1y",
  "key5": "3Uhb1JGSzx2WPazEmEWBkU3kpa7gK47hfGrDphp6tQTiE6sGkiQLgHVkWR5hvb9EVyqyGjqxunBZLwujnUZWfqfn",
  "key6": "GcgkiC2EUSME3k6xxwrf19m2c2MDvwZGY3eWeumtQF6RH1JiYuhSTwtVspKsHSkEP9tYTm8sRztt9vnze761nyc",
  "key7": "3T1cXPeQGUnfu7qJYy4cxSiusxWEhLGLVHvoTTRSEzAsBxQctfFLNrURVZb7i8JHiHag2itbNufhcAvDbEKB1iRi",
  "key8": "315PJGaw6VohF21uASteQMPRkXe62xRTZrAZcBdaec5Knv9gZ1P9nY5d4azPLa4pBWK44ZVBFSuMFHBbX4DMcE3v",
  "key9": "5N8k8jNe1sgyqPf475FEfASYZj6XkrAhopnMeU44co61Rdj8ABKfeHmg6BY4XgPgaGucKiwxjdffVX6gjfD7cr3",
  "key10": "5SeeD4qGmtXjA3CuoUEaV13GU7qhajrCc5fPndFJZtc4u5cuXKPwinfAPnc3K3VpygVQbZSaMoupb7iVcv3MnfAW",
  "key11": "4pNUMyZLDtczEF572cEnffnBoecTirM2am5tao9cHw3GWzptMoVXgDHXf9dBKMSvoh9Zk4qpGuciv5TktwMv5Aso",
  "key12": "5153Dwsn7eaTTfnFD2BHasnM5ErpfzcRh2oYv9tPsgfoE5hsyyBdiES7rfRtkBQ3GqyASBEKjFhPE7mgZg5R3nUF",
  "key13": "4rnzHL1Ac8wh3uQpQPJ9J9EKsopdj2YYqPX7r6s8petqUm61p3obpMrkWAowbSRk156f3gXG7qTR6gyiUYZcWPmG",
  "key14": "5AUgPTNYL8nprPL6vRAQ8izw2hH1pTHsPJiAQei4EQfjwTJ5UGKe2RTsbAordPyF6QQVMMshd19XmTYL2vKxVFTX",
  "key15": "2m1VQtRn33wgN1SsSxpc2BxWmgAjyR8haJ7WdyGn6LS3A1xJ6KYmMpxVxLaUKhqDKP9Cy6FpENF9ELmFpHjcKMoJ",
  "key16": "5vAf5C2EajVsHzCXUg1VJ9EgodV1wRUK1zsW4dRUJyP7HbZopJvEKDKrchdzVzKD5G6ggGJ9CHjNcyiFn61ybTby",
  "key17": "3H4QUdoGZH68qg8EbbANAmXHN6vm4sUhKgiHC1eqvsBsaruN7k9gmMCtimfkbVCcj5CYXC3cAjPFB7NxuNQtjow5",
  "key18": "4p8Dt9ZWG1wm9pFxhyv7hk6DB3eNaSHNKsTpuvkt3KM6VydV3sM3PwWkraxQyS9gBx8pfQ54eY16h4DhjemszoFy",
  "key19": "6FW9gRXr8ceXiAnXzvTiMWS2dgQJVDaGfVQgr9kk6KssmAaydk1JdtG9nHZkMmPNxFnPjpKd5SBDCGDkC67NnTm",
  "key20": "3UuBjA3pMxUEqwYtSBtj6zH6KXxn39J73vUVDzFjZN7S63dM7WAFdHSf6hiqKacgDRh7EcYJBqdveuA5P3ctwJHr",
  "key21": "5vN1jFPJXQ3Hsi2GDK1HdjRp76WgMt79S4VLwWUQpeQvkhPHFHCnDXEbm4hr81WVdAn5k56A9szXURRqy6hmtEtM",
  "key22": "43qDHhcDytRmoPcFkjTr8J8Cx3NBJW7SsQ8X5aNMq5JnwtzCQKJgcsyMz9EtJZkJEK1bFHmSv1vHAVfjdXaWsa9q",
  "key23": "65HknKB6U4RR928fSzWd7dEh3JKUGSDndkpvHhmE5xVVQ2YWhmqwGHkG5cSDHRnEvybSu3yGTrYQhU7grVDtmjJa",
  "key24": "3VswG4pK81AXX9AcBa39LKmmqaa1fjYUakfCom1QJ2mW6Gj4azR9rP1zErVw9ZkKuTWnuBup5zoeV3K6gZBiXNg2",
  "key25": "5wJuKYfNKHrHcGYAPpuTcpTTrtyYqSvdoWaTVXd1tc3q8ftvJM8RwysrDvpuLw6RGc3PNbPSc7aUF4y2PqTeBFDj",
  "key26": "zCKFNnf8WydM162hE6WtadFgpppLodsLcouUCacw6DyXWoHZYAnEpxEcYaU77N6SQr4uw84DmS24F9uHBt7fzAd",
  "key27": "33dUN5RVSHo9KyWFGVtqeHSKvKZKCQUYVAxB1tK5zyuxXjnYwakup3NrqrKHSYYMAsR7NFvQrdrnFp5xLFHxqD55",
  "key28": "2yddvFBggxgeZdY8yqvYTC3aJUtScoaEJpqcgwgeXbgte8S775mYzNzhzpXRvk6r2LkQkHT5KQtrDnXNoYu8GYpc",
  "key29": "doWu6CjY9rBzJa7LxJ8B18rLqhkpahXhG9fUjcN8iYXUdkK7oLERSZZZSqHmaVNwujsmP7xwpDWAMmjkF6r5s89",
  "key30": "5XLKPGxEPgfMnamxX43HkTxbAchyXhm4ttMGK9DXi8uGzJbzV39MZVKpw4R7EL3tMCKLw7wn1jyxQrLTbiUdpARg",
  "key31": "N6MR6kVUKL14esy2RN3TpgWR2DsS7CUdaqxyEnnMErAoAwXhCjRyFDEF8Vrj5iGDQzDmqXKkv9BC3gdb93zdJuq",
  "key32": "2NbmsZdpxeLsQA48oY4NXZQN2BACJmkfhCF16ty2yhC1vm5yiu2HFegjzb5pgq4xBt2yDJubnNyvyU2BuUzjvatB",
  "key33": "3Af5q4EBVMie225tHuFfEGo8uRxmV7VcfeFcdDZxASH6Zya4enKasu2SEE9H7nz9WwMELtyTBL8SBZQDqcE74hs3",
  "key34": "5JFoDEAjxMQNE1HLzBTKg46adwyxUnYWEcFhxg3gxuWcK1MMN2XDHC3Z38wvLGgcrCy8nt4xuaeQWFtGKSW2V6gN",
  "key35": "3L8a1Y5nH7GVsU9LsE2LmLfWBf4UKYe7mswRj4fzR6iHiz4xYY3kfHzZkWZccWHoRR9N8gQd1W4FyRcfLDifscpq",
  "key36": "5DMMmBgEcwqwqqbMZ1jGQZTee14yndmDhACYqrJEuTqrCCufBJvbey8wFUqbKajv9DyJ5VYcoTBmZndZqMmST75J",
  "key37": "jrNJc2WDJ2Y1V3HUhqogiz9kGNbkEB887rrC6gomBNZT4gZh7uRayAedapZagxkcPpzgj1teF7K6SNxbEZVGR1L",
  "key38": "5BcvnKUBYHrWspucBJkw8W8RGorc9CHHGoHw3pP5tcMPBradhcvRaW7916B8W3D648kEpC1GmvS6fUPPZkz1Qtbi",
  "key39": "D8udNT41A8Ntfw4JS1CAc1aacrEMLDFRkcmUc54f3ejRRugRWPc9MkzG84SXE3XDSThUtZbr5WAcFVdKxNEoi9o",
  "key40": "3erVgg1EGoQnxEcfrsStDFmsn5sUwp6scVNuHPyF7ViPTMxJCgnMMesBV9Ekbio7MqgV6fDr7EtCxABhtcmxwA9K",
  "key41": "3SKLVrmhMuPYq2S8AiLZwcuRxcakKLmqgMDuaqQf94AfMjwcXzWh99skao4Rd1sA1ZkLkcmBe3QKV3DK6m5ZBK53",
  "key42": "5ZBAg1GmCdcAnBiM3w7bjcvZx4ZB7CKquKbLcxiDfQu7m5zgTUKmf1M4hATtJwbzMGUGVoQWqrrDpwi1QtNT8eNn",
  "key43": "3yAKSTJWup63q6cqgVEPmWP4gJAbwxnapPBDn8TvjFTuvMPVyeE8sFarNscohBdGkTScnZfQvmXNnUSupVqHzEar",
  "key44": "51MtNrEaLqfEdijxbfGew6yPojKFQy7KmZvtwQHcyF8ZUNzqUNEqZxkhUhjb8w8FTBkefBwa2dbbxcbd1RMSLVW6",
  "key45": "3we4QTU1nQHPqfhwEBAa1oaX4m5xL4deDqWtiaqxsKexZHqT3hz2k83U3cjC3T1jn8MCUk1Vt1whrNGiuJJvV59L",
  "key46": "3ZbU8jTabGCFcZLta3LPWijFcWKXMDGfhz498RpwRKJx7C8iKutmJAJB2YWBQbkpA2eqpc4kcWUKrTX5kzuW89cg",
  "key47": "oJu78BgL4fKwxJrp4MwjvWeViZBSKLPc9EaVPZ18w2nVKVKyFpLaUirsTAEba7nFEFWQx7j3k449VbV5H1Viesj",
  "key48": "3rdCiT7Cq9YvYLXfbBgDeAZbvZgp7tVVALKgdCGnsaHW8PqcvUAqEp2zhtnk7XTHLNne4pKeNAn1aPjEHBicJYtk",
  "key49": "k2VG8Yqy7BM3ajW7QdHm3L3brJTDqov4X2fWqe47cyeXgQzcs3iYL1NfnpJAqXow8cvoizUHwP7UrGnZkNWZoe7"
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
