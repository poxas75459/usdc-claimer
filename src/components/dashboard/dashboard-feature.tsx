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
    "3EtRp8UtpZzKJXmtaZtssXEbBxQrap4K6C7ZEvu1qNBuf7zgnF5NnVUCnfgitpo3ocHyLYNmwk9QvgwRm3TbwAMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62491XP4cZhSnmQT4magjZ5vK2KTd7YKkpBWKpRMh3EiW2euwbdN81vNnXRV625H1fTEWZecw4RmEHEdJozvNCek",
  "key1": "2NPNvjjupUMoFRk55zVs88ggvVokCZktRfkQvoabhcTcUeFtENxSt3xmmkKj9jjhHJKryoCgftyVqVuFwQsqewo3",
  "key2": "3Xd1wHdBjxAHCdvba15ebuToxuk4J5Hjy25HXo6sHTdrjux59f8QCExftodNUGxiaiZ6kH7pKx7cCBKNoHdz2BCn",
  "key3": "54girecmbLC25k6Vf1h9s1XaV76YYQ4X7xzK88ESPR3QrPXEWam8uW9JbNPeBB8J2KbZMvxs9Df2tUbhRqYLix8t",
  "key4": "4tHYn4uo1A8Un8sSExws8SUy8QjzGgUWe4vuWfQBStb38XWB3zLzkBcFpmqxMbpJo266Z8UUpt6pdoYNy9JZhcoS",
  "key5": "2jTD7KwDACsWpJRyygYTg8DmKQKc1USBNdQYP4XwzdSJokbP54SG9R6RHK8n59cd7EPG8NUZi7sxmwJQ4jfG1XzD",
  "key6": "3UKYxpUxSfshLJWrfBfduEertvmGEKfeB6Vpu4MWwQxP395XURxoZLgFWAHFhH2XCHX8nzJ95ZQVBwJotrTN68iM",
  "key7": "4KmZdkrGmsNacJGt9vnyvJoqUFeJQTRfsURKqycctYwM9Kkdhck5WScKEZXzgJLwu2kz2WYVoDXQhy9qudAgYz7Y",
  "key8": "67av1dozw7vDzQgyLif6E5Kjt1HuBAC2uUy3RGP6WBpDj21rPMNpcfGFfBSkrpY7xqYZauyrcB8Xn9SHbi7ReuVL",
  "key9": "Z41k2LEPfb6cBkpyKFt7hDhEx2dxEf6oAPgVY2tiqun7fJ7sgHV5TzQ9JxYP852JiTPxKb7481iHuh8JduSjvuq",
  "key10": "3tY94oDqALwBpUzU4x8DMwfTX9hsHuPypm91wTW8xjpmpgJ61QEspJNB5ayv7LZHQWYC2LNUdFYD3d7pToDW1GqM",
  "key11": "2LizBGzJJkHCgbFBaTPKpwh9S5ZwzC32y11o4gbP4ChWuv1wXcDmqZdLgjXZPqG9PF2WufdNemUWcH9B2jQQpjnw",
  "key12": "NHSFymaVoZwUZv8czek4CPpNDwU7iTS5De5THkHgYMubbBzMuDDKc669bmVUuexiDY4Rn4GGXd5FBtHje1hnh8n",
  "key13": "UQSn1MqUnzSA5rGRME9ZrBMXrQLh8hvmjzM4es13T7RbKCTW4cyQ8Tg82BuxdQrkxB8JXs2qLPqP7hHdkcfPwaV",
  "key14": "5mN3DbrPGVFD7ubKw3QWn3PEnVqQHbrT3sBS22E1DCCUR6eMz1pWKtQXKHBNGCs6Vwp7Cgbw5Miixsnvh7D2wmoR",
  "key15": "41n7whTWKJoefHebggjLAAap9S1U1ojHFWLZLSYtMzSxBfUQWAZTwnvmb8bBnqRT7W1AfGsiQECUcZNdSaDjCQw6",
  "key16": "Uno6ZuHejwfm6zk1c4zrRbrD8FKMDEnkQCBVEBYYkWmr826p8v7iW1k8dbWU7d8kzbcS7pSNbsswhoTJyow7HVE",
  "key17": "3w2dJi63GiELiYDxWzk7MqsBaPMQNxCpFxj7t41f4VFTmsfNv1mkmKPuaLSCz6Jxt9v6a7FXiDHQrttBkE4LYPp1",
  "key18": "4X2vZnAD52EpApY1RfK2SZ3sZCqukkHFc55tt97uKbepNveHhntPF4AxitoQx9vq1sMhAS1JAqQaTkQaegHBQaaM",
  "key19": "3LrvsKAQRjkS7e3bXcuLHdMN8XMCcqs52rQZ1RiBvWL3oXtzksptE5xT2LWDLNzfcjDrD9iSXx2CBF624k8bGXxB",
  "key20": "3Xawux5DVrbaRz4GzURa43hEU8yULoPuHEiK1Mfkw3fYgYpGnN92JnAJExaaF9SMneJKGdo8AtxmWvMiiUnBXAB",
  "key21": "5f9yXdiTDW3ndR3knq47GneTPt1rKxBiHZWtcexgTpdtPBxY57WsKLcZveU2b4xhXxGXJ6BDKxUoumd67TUhEuPS",
  "key22": "3SaHVj36u5EMvVjB8orxhfd2pg4PHv9XN4arFzmH4VivMe18XiUbJYTvzRpTGj6bBMJuwiU68Jb8wNMqga1HUkrm",
  "key23": "2EBwSrzk4F5b4her8mcsR4gZccBLFiiVMh88AsG1SiFMV3WDJffso8APNUcYNvUfr2ontGGPWDm4gFNBRC5yXsab",
  "key24": "XaqUiPzgnMhPVB8QPas4UTTH8nEkchJF8JcHaE6drqq7WdqYWGmtqjgtQ8VYGZVC7hSdX2RyDRBBiK5zPWdxKvj",
  "key25": "LbxSwQNCpF2wVkHoRY7VFpjdWak85idQBte7jQ1GromUaMSkTihUn4tPqVFtGt9ULARMkTdn4u5St9TjLPmkcfa",
  "key26": "4vsM2AVi3fRZwBakzgu19jQKa84agNGafJwyQhNjXLLtzFBq1CNvbV7VZMkkR644KNq1R5UQQ5qgsxuiCxx2eHZF",
  "key27": "38HVqCKEeRN8nT7TGeCss5tLjoPgonsWDnesqRMxCgbcNAv7A1MWzMJqnC3rVmyfyu92JMuS5Hd7YyhoLeuGoo6j",
  "key28": "2rtHQ7n66mW8j8taQoQgFwrWLixSUtaTr5WsSCSoGD7tr7syrX74xjzLf9SDkGkaEQ7gUrJPQJheEGRKEaPhYzUR",
  "key29": "3CpfqKho91HZEZswGptc7pN32EynugksnEYEjMtnVAwLHPVNfoaRniStdanFwaqQoV6WPHKEvUFMBPRQds1azWWR",
  "key30": "ZLvMc35JYdEFneWZQbP8js6xztvQ6H2g6N81y5dbdEeUw4PYK7oPkwZMwvtUpBELn8KS8KxkDBEL9WpH35nLn4i",
  "key31": "3B7ophoZXWmDWpNW3hd6Tg9RESwzwdYbyqVhhU5HHBy7CPycc21PXqbauX5KKqEvXfPZdx6PwLZ1KTBNbDAzKCKV",
  "key32": "2m2oPEBpCEEiEt17UFj1vpH7uVVGmsYiEDQkEK3gjG7Mf42gqLmAAyX5ABiV2qpj6ypqBJt7eMirxCo8QP6JyXPV"
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
