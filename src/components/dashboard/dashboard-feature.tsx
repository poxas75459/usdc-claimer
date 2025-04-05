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
    "Gm1ysWLcJZ9wVy4pGrpFo5972jpFyz98GjSrfMkRPu7quYE8jUTDek1cXEhmRGRKdSzqq6WcURKveTkXvF43vvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YaNqtSPfLrCqdJhL3h6F9uTPKYTQha6yniP4AXdvKSBG7hGVbZyeYZYF9wSdZDG3DgUwBQmvBvwJFu2oUGL7xg7",
  "key1": "4Cd6CmZTqRTTSs2GqFXWPbSLofZ77tWwSR2yTBSj5VYd4o9bChUA1UQZ3wQUVhYxWFiKHB7uohppFrswTXU4iMRf",
  "key2": "5gFxLwauWS9fJrMWLduwA5cKHfsvnH7khCuEXAqrFU9mPxVNE4LGKZNFCw2YEVLxoBsvj4rEztLoiYpZSjK7MMvH",
  "key3": "tqG2HeYF1cp7GttoMnDCfWbYbLDcSem9s8Tsq7gB3HnK7b84iTUr1wyzRujoyiRbXx8JQfwniDbQfej25wbXD1o",
  "key4": "3BMxggYtBxSi9s22qKBsAKvKhWMqsjGFW7ughLMLyKYPYNEQinhgcSQ9UgzLuapUqBGxmWESGS7NrWpTGrq54tjV",
  "key5": "4P7ohPKVzxu4dxRVyxDXnPpvPFYSoKJ3MWpVPPK8QvskAsjYm1qmBQoUVn7CSP3ZFSPpR7eCE8m1rtLbkVwyZEMN",
  "key6": "4E1HRHiRiAg5VX7CH9nTCFPSnpRQPVTn8jrLuqfB5ke9MkCP48pr37gwQTbuDYu7KwDJ3ktkt5MDEufauJA7bawe",
  "key7": "5reUDZU2bDyNRhvgXUkHDumcTPoMiGSBmXbtT8fS5ib5rH2Dth3dw4yi81NXDy8SWzYTWyUHVKCYdt5gv3HJqXri",
  "key8": "4rnBw1rXYbAqrSerff1N6ztqFajkgihuGS316qhodzB3EMFeuuwb7eN7Ysk52VhWAbjyQJLsV2DaXqizLgbNLXgX",
  "key9": "2FqAvHouMJuQSazDscKR8pvkkeBisD3b2UNK2xpmrZuT5tyr7gVUNPaDaRG884BBQEXrpEBAMo6UCu3aX6zU8HqN",
  "key10": "2cAXc1Ukb494z3XMPe6bUKS1g926wkQVdemoCfVFziE1fzLpHbGuiq1Hv9W9tBGg6d3fCNS5VcNYiUZffV4mqLmb",
  "key11": "57ZyJJjXoak4W2KiiTWSTigsC5gpJtUnC9fCjx1DNL6Rwy6LtzPxa8YB5SubS8SQNe6xfcdiH4nyVqP4sJfrfFkg",
  "key12": "454jRJqLd4es28eqqkqBkT59CMkgiTmEX71dWQa8StkfeUY8Q5XCzQTc12dgfsLnN5XVuFQxNA2FNuumYpC1wzaJ",
  "key13": "uA4Gay7y9JfgkXb6Y4FLJ92GoS6U1JTY22uKZSQh9UeqG6VdwqUXHn9DXiaS91Gvw735uuekDqBAje4H7qucKGZ",
  "key14": "vd3BUh88EHPKFUmZ2skZ2rQs2odwwbuchtUC24F7U7GJUiGHmuZST4uQrwTi7fmNJCfMS6uwA2BKqhkFYk6Mvjy",
  "key15": "21am76z4PjY4QeZy1sg42h7n1Mzhk1aGsj7nndTmwgdN4EBg5CVJR8LybYPujrJfp7XgXhuuMowadzqViX7eV6QH",
  "key16": "2txXuz6deKGRNwrp8RkH5UPTnEYeYoXyhArJN4t5jaSEc4EMjp5FCgjX7LWy2G8vneEzYMci82QdvuKTCgsu8cEP",
  "key17": "4PQr7gysE64MzzraQVMhfWuGVnzdbhcNxwXMfTjo5sn5Q8fdPcmJ7sfoEsEFqfsybzqvecjnXU5HXBdcr7kk1dyG",
  "key18": "J49XHD4yPwziqSMdJZUvF43B9wimVvwxC7sfnk8ZmKhw8xZCHdwJQF4UWo5GKyDNpCPsF7f1NcS5LraUKTsdmLb",
  "key19": "1UuShxxhjgobjRUv1WERUqCGwhkUYSHn5qFz1ZzQc5hQqngQZLfHNfAJTDjMAyjYgDXJbbdZ1ZxAZbauFm73n9H",
  "key20": "4owa1t1Zww2n3xx8qZ7dGYnJUeZ1qea8JDSHBs7DhcJEZnLSGNwPJuHDJBcqyzfTtgSSeh65bo3KULoyRnvK74gP",
  "key21": "5VX77mxYYoGVUGfGNYpPbL7rrGzmtrj5s2UezWjVAATvDSvvKGs8QFfZszuzRQfQ7zS9dKDjnJ9wSFM1YUK8JK9U",
  "key22": "64H3TvxU4zcvUdoC6uZR3TWLcXZUdpc5CFy8F8NmeFfR2iwVvj3ysc7rTpu32uAznFo1YQWMv7SiU4tQ7uVZAE8d",
  "key23": "hF56gKuj7aoC4UN1G3UgrTajtjyhJ9Lk13T2p98jy8raUeeFzaDQZCzWNDAgvcAcCNViMLCfVkiWsRnqumL1swN",
  "key24": "2X8SiJod3K4yqDF6VHrfp8zQ3RkNdadw4VEgg26QPCxkmfyQpef4VkBmjiNLM7KcggviZUfHVrdXwEf9hkZkNREv",
  "key25": "56D7xCwsVnDqsdpZQAdNqPwLxwh6XQGvb59SZ1PkrjQXT2ctB53G5eHDxjAGqAQAHZiXiqdmU9RvUkpUKyJDtQog",
  "key26": "haUy7zBUbhRoQMFT5z1ZC8UfwgxtjuKUwfVjiCTd9S9Lqj6oWZsmYujzNf7Ki7aNpFQH5dNMW6CUE81qm1RaKc5",
  "key27": "bDnMuSq5TkW95DiYs6jYJ6Mao3LnkbQLBbGopkUzAAmL1aDAZyCRNXgyzb5Rn5QXk87mZoGQES6a9dCEvZb8rEq",
  "key28": "3uD7XyWEnxvJ4oUtkw7WDfW9YyCDYDB1xhcFvdXHYzUEje3TUZQGbB55cNKihU134bhzHsV1THMvNintdk2ZVQtw"
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
