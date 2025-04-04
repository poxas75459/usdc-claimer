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
    "3PQJEaHuMRW1z8cVqoM557c6cXh83ngNfPRhFkoaZ35rR7mbghDFz86aXNFF1QZTATnZpLtkGbCbUDYm681VCoe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "563BJCHjeLhop7pDjvJZh7ZvpZVpcexLKk5cedTRFf9zBAz3uHVXqoVAaX3Mq26Yh9pvU3ZGzBY1ju6nkUsdizxP",
  "key1": "5c27e4L1Q73mLfSKWJcVZ9bC5EwDCLCbabfvYJaCaGw1szGjFJciAyuDv9yLhy53EsfD9D9SCfGrqAY2osZCvwK8",
  "key2": "DoARHzwhX2qQPCyCdjAPZXrd1XRpYTBKxGmjCkNdFe6Ew6mCsukpT98TL85DcHr4Y7fs62WypLgpXvG6aXdDVir",
  "key3": "5bcPqmxADVYGzXsi9ZpBS2W8ueN3rgAGxfWVb3ppFe5YJoMSjDxFJHUURFVNMJDF4XGaFrPuzJYZDuL8F7zBVSMQ",
  "key4": "LYcEspFSQ7DaYakuCEs1F4Nb6BV5m3283dSnomj8MNwHRkwouHfMPL95a2TmhvdCMMFEqtLeMDRTw333B8bHFpJ",
  "key5": "p44kNnxF2dwXvyaWMSdWrhKDQ5ksBiVL9PTxK2BYbpFhiNesZijnL6nuuxLL3btGe3mqQnA7odAkm9SXYcgqgtT",
  "key6": "3if5Fbmaaj1B3RbasJ63MhEwXddhSF3uc1V4Y157ZBhco6dmo9zBXMxAy65qGwjQjYBCw6oBzSfhc6TfHpkdhQee",
  "key7": "4DbXoTZQuk86ZZCLNntdgUYkLqxf4hMDRkFif7b34EPecxwcdjCBa7nVifiGsbogU1qbvkQvGUvAKpxSxZURHVYZ",
  "key8": "3ED5tADq9ceB3XPwYTgFY6KN57ALdTGRkp39xjf5G4eiB9Sso7o47YSUPQWJDTw8ap29tS2iEFAVKFxMWqpTgepu",
  "key9": "4LdMrLQboJa9vKj35vPjaMXjDeb9B9UHQoW3oaX6uDmnZHrtUtsbfPjcrt2N9rVRFYuAkJjFA3VSNB3UfYmom32g",
  "key10": "gh1F7wr9Nucj2RH7umfzVZEsa6huK5Hs97AUSeMLsyPqK4QsVCjdxF8G18HzudANPYk6zXo9zmwpHJXHicyP8gQ",
  "key11": "CUPVWFNiScAYAbQUoY1eGqFcfGgf42677gwH16aUUcmVGkQ2MwjjM7zjkE9qF9J2TqFqpjVDhn65QLM4XesDRfy",
  "key12": "9MgYSmyBURznHi6Ni2FSkbKVE41oXtUzQYV7DW8jP6zGBErgSMfRp133W43VRNEM9qQ2jyTuUDSEvDVF34vxo36",
  "key13": "4cYqxHRQqcunXhGrmwpdrDreTT9fhqUGSXkSNezWwHYdxtyo383ympDpbfXdXfEmfkcM99QoDsjxhFkWcW4DJCb5",
  "key14": "2R1CXwbxEAYAZyY93xjo9ip42gGuTJpPGmRgQEheYUq193fsxBpTB6NQjJSaJBuuSA9U7jm7tJWQzY3N8PTdvCM8",
  "key15": "67YcA5t9HuWmk33ESE9MWyds8QiJcu3ssQbzfFTc18WU3Ymi1Fn5mebYgbbFQNp35HosoHpRzBMV3Bhzey4hTL7i",
  "key16": "4EYgQpvBonMTr7oBG77h8a21D3koyycmLt48Ubges9x5GD64XDneLmSJtLfu14UazQgpuVVEEkUbKVHvnaUExmLX",
  "key17": "61VGAJpTSooYwDR9UUnwWuubFJ1JZyPSbZtWgG8gHtKRvXPu4g8si3DjHk5sx8CMhBuoX2bVPHc6RWjCZSYhw281",
  "key18": "MpshvjUAqeQe9BvbmVC4gmTAoYEHkzDeTeMvUk2RHhTm1W7jxPUGeWNE1YBEnZM1xqhsM4XKQXCuMTWbahxku3V",
  "key19": "2yNQ6DGCMwNq8hoCS8RyWaeEfEbdFG83GL7VBFzHKAKUxzxWnjiw57QoxkdhJFsX4jD7C3wReWGAtjmwC5CY5cnk",
  "key20": "4RowxsgCrsXeqcYWo7Fk2SH2qv8jHTr7q8HRpzHtNbKwmEdXpDpPp5pcdLtcuPfzvkR34hgrHm1WuG5nC3ZADcEr",
  "key21": "5ncVbLAzxbVGthXS8k69AEfZvVhsdunkzYt5Z73zSXb88rJ17frFhWNzGo3QaTL69h3X2CzRjsrwnixERDUCLieb",
  "key22": "5EHABVEWBmaCe9HZwx4a6rwZ2FuQCBey9z3rvTRhzTHAutdRuCzD7fDd937P4gXVaMpENoowhgux843eGJdWgVdy",
  "key23": "2MWVV8xzi5dQobb6NygQRZFRh52k4MCXpraA1zgLqxZJjHpBDhf4SQRaLuNMpFhdsUB7TpgEAycaEovaS51vecoz",
  "key24": "5NDGGUtkt7PVH8B2ed8EBBcEYrgXKamBDdkRWf7VpfovFnqbga4qUY5yJA3CQAC5ffyykj7manCGvpt3L7NNbZcZ",
  "key25": "3AxHsC8cweVBDU43JrYVeBQ6TigTDvEV1WtShx9L8YjopboHrEAPSFWEVZgxKz5XSnaN2cQha6c4ut2PY2goRFTQ",
  "key26": "UntGEgHVZRxrtnczSDdaQX47ajHfjCDCW1oyYUMpHj67h3mJHSLP4Z9xnVPQHQuruZWnJSjiSLgGpVJCn3GANxL"
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
