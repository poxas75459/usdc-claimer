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
    "3LKu1daC7Wsdo56oe93PZirWTGepDu8LwdPQvGMUVAWQjiX6CPxUAScsbhtJKkvRPhbyt9KNYFB8kLoYBeVCSJmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QM9rLRSkyePGxiztZZZ7pQgwkMTkGAXf4Egr4hDRC1Vs5JwRS5SXn3dtNJKuftRQ7GZu91AQvbqCyXYtBGBFtDA",
  "key1": "2ktGkvZSPyJEFsS9nk3CYpRZPAuMWzUp5hWt4e6pvbMTHvz4NFK7RmMV5ouPemWqHeidu5PLrgvcKmRDWRYTjrbV",
  "key2": "4dbsTEnPoKgrz6NamuPvhYiHJgYFbqCH4FVBbyviFKatasb5wRiLeNdTtDCXSru2RGZbyEDe3uVuc93HXwexG92N",
  "key3": "4A1xEt6SaAJWaV1yqZ3UUbXrrEjwpkaSLA1Z1q2xtMtUwjTvkCopNcNb8v4bCMEXCSifCzWFdh7GJNVKD8t2s4xM",
  "key4": "F19cZPdTjpTyqhkj7zhTWBjFCMToRsSqQvh8ZTM6yMFKqMvLsMBt6pVSyxKDQgJgwv8aCdHKPPWxkcBRJjLrLVv",
  "key5": "122vBqoxMTB25ogzps4UdGnXBLAiKXYdX6XXwB3Qm5bphNc8t25KaWTBw2ssYcdorKBSDQimYfvdcxeqwNskwUXb",
  "key6": "5sqXEHLabqP4BHxxRCc6fYeRBir49tciQzAakVJtFaMpEi72HUcHuuZ7884xWEYftpikmuTYpwR3p8D3ZVMWcrWB",
  "key7": "4bChH8SZwBXLJsEwc9Wdb8B55yRmDop15nu6E7vm4r3SasrcbV9MS1PN5EYmscoe4WPNuziq5gXxqF2WhnRVhw2Q",
  "key8": "2XwhYzTbTUEZEp7FT33mU2J4bHYBDhHozynWK6pMR37JQqCGotZF241A7EtBcSdczbvrHtD7wcdzWYuXNzveyd7x",
  "key9": "R6XdqcPk3MxtKNgCnDh5bNNDhNRUHLHSC6bzJc2KS65eqXQDFU1Jve8TVExCjzJYnTx9MgJEYgiXwXcYCV2eVR3",
  "key10": "1Q5L9zq7MxNzfAF9Q5NKqbZFjzxef9urYAoAtzFJj828FYiheMQ3dneMB9749AN16H11cyNgtC8PqrGdR1PvSrt",
  "key11": "4ETtZuzSxr9WZukU9q4RB8VQMPUeFxDVz7Tb6BCXa7rQjKx7ZfbGLSzQp8qjFJSzHHnnMDpiEsXEkqgAa4mie7r2",
  "key12": "5jEVxL9mwDsXY5SRCeHK78tDQnGae22vw6iCczx3nVNLHAigGjsfVMMDuqFJUaffSCsQYZ6diPX6D81Uz7NcHic6",
  "key13": "5CZUKUXXmNogzmbES5HKVetAAVdVh2cEgPvCE8WU5CRK7WSpw4aXCDrXn6Yz5gHEg1yvWUhL4oCx6as2swNSU8Ts",
  "key14": "4QEZDVtAnBHqpK2E8NPxcJT62MAkBy3mMNy38KAHyJcAxh4oVBDC95gPZEC2HwsFHweN4RT9LhfNrgBLsJcjvb5p",
  "key15": "4oeVuaoWEHMNEJe55dRrQq5XUCxh9kqC5ij1Ru2Gf2RbfNwLLFqMBYiFnpnxkgpDG4c6sq7XocBGqE2et2Kes95F",
  "key16": "3YbEAsbieQ1w7LkNsgxWwjbukDUk1iQH6yda93bCy6Y5whc32NQiYLxSRoAAzTdxR9jrYPfjUfP9YMVDwKhzvoMZ",
  "key17": "22bKBa1Bo5VsKHoi4LtV9yvRK1BAGWRDQd1NaqKcVPPGRxzQyitAU56g9K1efLwCLxxEbSDiUUgpPGpojZryaBY2",
  "key18": "5v6M2wDNCypQZEUHUsEXtokttTgHMSUhuCJmVHJFj8chw54anmc6TFnh1ZRTnZzuhxVxjnk3C5VByWFmVrmZ8Hvd",
  "key19": "MJWVHqM6kTP7nVJ1diqHga6msrffzLxKhuD7afiXHr1FoTpp9a6kWqWfa7sEWH6XBEkiHX1raAwSdst9Tr42sAf",
  "key20": "4PeSmhHwwoVv23hiLsAoq2X92ZSrgW5a2bHvHaoTNUgPKiUuAPUSMfPY5aFNqVRYfw4KwnRbEoxQLktT9Su9HThx",
  "key21": "2V318XVtMymmuoUQMfEdfGE9h5j7hEW2NEmj2aZYt32ZLUnfwgutHXWiqhPCZijgaucEPnDWAHT3oymcji2kHHy7",
  "key22": "3LgeoBqZJmMZ8fnPTj4HJmwD9hpC6DNQkjrgwrcecKCc1bzYNGVnvN4tebRFQf31iCC9kdCrPbdxKVK3ScEBLhHD",
  "key23": "4rRRjQKBmdCbbjDaaagYZGVQZpXzfNGBgYP9qeL5TesRfAhP9TM1WcVzFvJ7VXnEBNcE7Tf3ZMPLJ8wyhGhD6joV",
  "key24": "hroAoCqqn679bQo1J2xSPkouQSCSG7t4xfkqDo2ghwYgZys6eu1mkaNfN9CMbHNUdf85ARZ9VwcENhNJuvnTxjx",
  "key25": "63GS1DwjFQTmFpvNW9HHxP7AD1qUpQoEcshk6w4qq689cd4hVTML6jAGypH6HaigCCUsDS9Y3c7FenCju3KpvJsf",
  "key26": "3BsvzaRGts76u1Gaa4RJds2nhdbEkN7A3n9qWic6WeVtTB5L7HLnZVrudsWRwNQhSbWjEeaaCp6DEKV2uuC6fQNf",
  "key27": "49ybdcJ27SnBVBXxy7XQHGTr65Qx9f5CA8aX5uHaeya5zPPedzackjJYpk4CWrHXzPQagUmytWewYtDzk7aKxDne",
  "key28": "3c1rPAYiG1iYSnfbhfVSe4Do5fwX7j1BBP7paKz3jqGkvLd9tm6xee6xHwqJviqMiRhvxYm2d53C8sXLudg9H4MB",
  "key29": "SsnvkCcjGs7H5D7ZnWpp4yASBiVntosocX2z8iqXbc4ix2SNY37JGLrGi2pLNLjqBoeXfX2XuJg2gGkMDsNwWCJ",
  "key30": "47rGkuCxSFaWUNSDq6NuGyWcCZ2hVgssQzGLrb68TxF3iH2vZkN9vWKQ3rDdywe6Zc3xTGmUWFpN2J7XYT7AyV47",
  "key31": "3K4ifQCr9kMfZaezbVLs65vXkJymzF4j1DALBgqR9akaZpmptPVo3udWeSkWpWCFXHkS5FKNMn4sVxhsnhWTWvgf"
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
