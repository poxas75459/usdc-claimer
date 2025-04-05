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
    "29JJ22trREkzkPyNnqCbgPuoqPyNKJ6hY8FyghQPm4oXPcJAMv15dzbvRnEXqrMmd2sCM9JYSJeZ22mngmQubW5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g4ESXZZYRBURWycTxqvqz4pKnrfDxBRUbdntvYt9YjP8YVmkozKN53qkQNjJJCi7k7FUXe5YnNYXNkXPR7Mz4mA",
  "key1": "2yzCXXMKneE87BCRuDcSeoeX9X7RdrLDmhuWSThvmjRZPJYS544R49oXu286v5USz3G9LYHz1RJ5px8nDtcZwDxC",
  "key2": "3CT9jnCSeym5nSt8o7grk4htsk1Po6R5HZeN56E1EgJDEMZSAdKzEr8KDaToRy9rbvc3y2ipAzSq1iidcH34ueEf",
  "key3": "4Vd93oRW6AhqikwmXGTWirQgYTpqJVqZw4rw4tCswgwCnCH4YnHxZd7sCam6iLptB2wxnsJfZEaY66XioPuutvHm",
  "key4": "3wEUfq2D56kFy3wL4wnyhTLi1owEtaigj23pPpRPdRcy1r5qgyohdPaBgbyU2hAdaSae62seTzJb2Uw8UsmkCJnT",
  "key5": "5wgL3GHb8d6CcQX6cLhtFME3JGAAHzo1gmXUUJDnBffhDGuhKzLQ7n6jToXrvboEvSppMrdPUpcMXRawM2Ao7tuB",
  "key6": "4oq2Hw4wFvQ9He2taj7GeBiZtifZiRZzmxKBRkEjU9vT397AbN25ELFLsGsGorCBdwYisqP4cSnMrag6Gr3wLwZu",
  "key7": "YCWfB6y8vS3rvn6KEevV9uYyXeWADphRYAYzDyKXuBXGtANC7YquCEY3vXpV91KGq6UPXJoAvYcQGmieMyQ4ecG",
  "key8": "5Povy2bGsXL7qTrfNuNfueV6zpX3E7VJJroQm5HZjGA72VZ8KgMAiTEzafVBXGeAscuWwTjdvuLNuN6nxGHHZZi7",
  "key9": "5nSNezS4Nd7Ww6s6XqMiEWEde5osxZDHXnwNgGHWQRCfh9qE5HKbmvyrdmMtcSSzPHZ6ZcEp6drYqX9dQJei2d3D",
  "key10": "unjvgFH442k7L7mZugc55JsCMVF8XLtXCFzRrqrveF9bpUmThtntEqLEK83kzw1uoBnpbkLps4JQ3DXHKtYZHS1",
  "key11": "5WTLjQbxvvCgXTD2JuemLGEk7oZKMTLuSPgcrV4NCsG2igo75ZqK51dHzpxnyoJf9qaQgxgt52z9CPPqm8W6n7rf",
  "key12": "dpiMcFzxG12iVgm8J81KS5fnyPDPx1zd7r7NbSLRRoUr179ZfwcxDJY1JJ9posT9XiMNZJix54rs7dVgT2rt8HE",
  "key13": "63rymiQkAfnAet2D7ZSy7nKqpV3KFjDZKmDHM2ugaysW6feMr8jt2mCcwtT1CrEZfpL9VLeHr335MStVkJkv7H3y",
  "key14": "45yezHHpX8eB8s1nYwCY5VU51aFDRbPTJfH4pugsz8JLYjP2p4PhhGd8hBvubV7e2mAwY1SUF3BUXXrxQVEQvqmZ",
  "key15": "Yz9VUNj7kH4zi2hVzWJ5DC3vW9odDn15ksoURoRcWMbRDSd1ta3gdYkRrHVyFrtVBa77nY8DRxEjMFxJAr2UX7v",
  "key16": "D1xr64gjXR9BdpponGaBfpY6Yfwp1oBEw4c33NgcvcvqZb86iJZk8xWTjZxE5BsfD4aWKngvq6BGBRvN2tRv1e8",
  "key17": "3bzg51nTEjzNY88hZ16SCCrEoqhtQGNzRzb5Wzk1yHPFQRpet8HUuK7WFmKWVgtimPoFJzHxRowtTDZNrFb1yBz2",
  "key18": "5Q8QZEUf9FobfcdgMqC9NkxDgrhW8rnVqju58o6i14aZ1EekusVFayuQrv3WRtDbDhuvJ49jpYEg9VrJosnwFqxp",
  "key19": "41FoWtQqiaNx5K6jEoF8bK1vb9AFwXB625ZFQoonACzCpw2M42N2FgkG55rKAjQGT1cCVDcM9Hz3LaAncFZULBoG",
  "key20": "3YmudQQcwhz5PXZVWZ75TL3uYhpLSkNyBbeKppSnv7bN3rLxFCMpSE18LFpBsnzCV8bQu3tJG57V4Cw3B5iXcZM4",
  "key21": "5DnYgBnua1j7zAg9AeTQD3PhcUi26bcAu4mMF34DmzpLNjgBHgVAReetCPr7MwkTPwhGWR4ZWU4McnMQJa4jpTt5",
  "key22": "2QC23HCGm9SjEtBtxo4ZRkJLVPM69Q26RVqRAJ2vJoXN2iNi2MDU3oUuvudW9AUoQ8Pq8mftu9R3x4F3vLdUhjAx",
  "key23": "DdgR7MFurJnXqS3napW9Mi4XmYfkcWqec1RUpLYd8SYiq24N3F3ekjBRLvak6Apyy3aUsj1gHrPECuB2MZAZHhm",
  "key24": "4iwMFADbcYxHE4LCpFXAJBtjKVHCD8sz4n4sTcP6PyRUxZyWDfaqpyGbeV1HuovGDbRGPhRSgcveJkh3MyVkRxfm",
  "key25": "27R1jEu6ztzrgEBiWissMY547xbKbG2HBijN2iS9djVeF8SgCfrKBzNffAERUPmdmVMZVYU2cpLfXQvw9voaohs8",
  "key26": "tJneC9gk9t9gEhkXaxg3mvQp59LUMJ2CfnFJX1gvk2dnizvPFisoT2nreBZNDx76YtMq1TcAevVCjVFqRK7Ef7u"
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
