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
    "2wWMmEgGw6A2NhWsUKBxigB1cbnsVoaRg6mWcmvtFPhfadHAEqFnEPi3cSs5vpP9roPduR9JxTMLMNQRUn56cNjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WTjp7CghemSq1s2CKdxTypt5tdpWcmZUWkce8Z5rAXy43xJSEMMZEr3UsLfMgPyipbiGFY3S3r4LawgD6azXvrG",
  "key1": "5nxD8rXzdtS6iruhgJbeWTP4Wg3dqG7quARtTT4C1PqNMUjwjCsMKaouJuckRJBaJJtyhrUBLZzid1eVbYb2rPg5",
  "key2": "2EHTJcRwwYYMwzK9GssUuu731R5CakSe7uxpGKbiApENrNHFqxhT6QPzcyxY4oiNM6eHrkxDRzPV5yuAc1QEhkPX",
  "key3": "39qaBbBrgtS5BD36PigMHYSE3kwTGNzqkPgNyTJCz4Kw6r9CvDx4sux8qGj7asLsyb3j1f3iWRt6rwZGQpubY1j",
  "key4": "4Qkmysv5EnJ7LdN3pJESigC2oeHhE4xwntZ8jNHvzFL3MAthPUhaxw17n9yRspA6S7cq4A3KoZUit9qa1URp7yqA",
  "key5": "4rXiDy78ocwGvms5dQCM542ZVk5bCiUCKaoB1ze3KZuhSAJeARWuW59Tcm6hRUjmMbjyz7Gtyj9qUsqTHCcrhGfY",
  "key6": "64sn7Gd3YNSeLTXZkVcKqcVs77mZPdJ9Cq6ZwbWnu28mHv4SFRVNqyw8Ltvu5TzucDeSLet27obQemCmYKSaVEvZ",
  "key7": "2oxhzpiULMrW5pMmGAiQk7XYv6cNKa9dvwz4uMfzkJ8tpZZLjRKzqUMAmVLd76rLKSz5i4jvawfbKsQ6q22RycDe",
  "key8": "227QsVTAhqyxXHncAnbuxVJasYXxr67wDocEhvKbuMmS3vujkPfu2ZPVBAQk4v4pgkmnYaB5qJRgxtLGU45j1BVL",
  "key9": "61yK5BhZSG86nahHJ6axZtFNZPf8AGbP1owq97K8TayDmGTDAGmXRt9zS86SSt5CYoPiY7TYkU5bGQUUpZ8zdnEp",
  "key10": "3zjqPMk3YC1RMzVyG1emcsS4qbizRzeoY2qfZdFH2wwX94JguH1u3daAzXvgfuett6Z3JJwN32E4wXDqxGQRqc1e",
  "key11": "2oRzpe4HFEYHVUo7pSsuwpM8pv9FyrEG754U8ZrtKjZoW4Lc1TY8Y9fnA4Wk3Xho19F8fqAMTbDBwV9KZ5rSYbvy",
  "key12": "3t4VkAGL5PpYdGagxedyfEtzJmMde1R5m2NWDvyJsatsX627B8JHcNL5ghxZMppXhpmmNDt9UYtQzZkuDapdWrph",
  "key13": "37xQZxuiFWT69s6h7QZ628HQRhZcL2PKHkdLULGSCi7kEHp5N1rMte2oJ9mK62sVMwRhf2Za2WAHMDSUNeQjqWdU",
  "key14": "4RCLuvz5AuwWPuAcj3nT23wwwacsoZ3Sw5S4h3LzubHioVJaj2Cpm85te7j4MbBQtSbh57yuBKsHt8RyMy4Napb9",
  "key15": "53L12y7iyksQCtGsdDh1w2jPLhEeiFBJLyq33nX3ppXpGMRfhu3JvcAHqAve11DdnaSb2WuJM3C2LDPRAibEiC9Z",
  "key16": "47gGnP7DchUpbkuyeiL5NmK1snZKHH3ajbsrvmC5hRbrmFxEsZZi1CYRADbbjeqbfZosPCBcFXPdQg1p5kWpn81E",
  "key17": "eghAFfhY74KBG4eDEcDPq8ZnqCyBcLqX3P7CXwkaKDzd2AQwtMtZsUFR5W59D57ZzD4g9AivvZR4FMNbJW2MuK7",
  "key18": "4Mn3S7sCpihFyZ742SoiyKLNuRnurUjGF9PKLHHi6LRucwAXQfpGsk4NwB1UHttPUE7em9ZXqw1BxmkZApwJaEJu",
  "key19": "4rTEQtmSguH7dKCWyV45NPb1bqnQg1X1PenMXMWpGCtyM8e3PFKRZxnthRurRRvNBQ8dA81To6FynQBRsNzWA7oU",
  "key20": "StuJq7xXdHMDfo9XF3trjzq97JufKyeMaUpX7u1uFnvHhjKhBQHc6BsHSJ8cFnVY6SNDPMsgwoj4e1ynuCexyAf",
  "key21": "2NTMeuFZpH43jQvSL9fkkoEddeQSwPXeXvuUAkQhsqwY4RYzzVnjqGS9ds5MhBQFRN3djet2zWymYsaLskAQJdRH",
  "key22": "2tGCyf9rFP6nYpSeUJrtQAT6eogU3UojHzLQp9vxgjdrxAe2sjhw5XLd16ZPrBKQ5VvGtYP56std5GqSeac8k4ay",
  "key23": "2AbGXdMjEMLbdhYKua2ifRk2y5kpgs13GHZyRj3URhND6haLaV5hG9M3v2j1fJUie1brPZegMN1dELkTNcH8QkNt",
  "key24": "3S1uxabG83bemAFAfaExcdJYmKCYjsWX6kHnQJbJ6Y8B7dULfR4QritbGbgVhTzEfxcB1RaSutVAZbL8qVrewM2o"
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
