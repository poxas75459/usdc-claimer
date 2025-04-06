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
    "4YSCVwWk9Pv9yrhEgUY2kb5r4fcXmu7HJvjHqxg3LXuGZXpGkJjs4h1ScW5ioDouHV1MNDEM6K1ofQbLi6DvPXsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lft5hAihpKs8E3vLrnvne8Kt8Z7JmpkYF8HAPspqwrSCK3tcjM6t9KuzLpv7tZsPTiysyoM6m2KHk4ampEec2ia",
  "key1": "5dmgSQBAWbP8gTRM9V6ug27LEv6JymAPCKSbAaKWFaZ1NqWr6CdJSpVXPUnXarW6NzYogyNbZ9fiN4LCb5BFhLi",
  "key2": "4V6YhW5qiygxEXf4bBBhctKVcGTwqACVExHLyMqNFGTafziXxPGPuAyYLkMoGGDfbAaAj6TAZ6jD3nN4TD1DydY6",
  "key3": "4QtZStmg9fbF2Q8dmpg4E7JeqpRZqP4cVNNNaDW4XCNQv9X41Mk4v2L6HNXcNpcvGHTtbtTFBfEFGY12v9NqJw1C",
  "key4": "3RY691GQT6mtdRViUGF5PjjEMmbVLgf8KNRhbWnXLcStzqLcA7eD8P1n2YGrjtvw1xoS61fg9GD823NB8TLs1GT8",
  "key5": "qwAsMPxBeWK7tkrrCq9LR1oJZ81vAUBwzmyoo9m6dCm3hH3eHRSQv2WyWWxBVDYJhXN3PSAzwS9PJFyzfNNjw8C",
  "key6": "3nqrkb2QsmMomQatNj9pwMgbyptbt1j6SCQcw6racdjHspGxDNVPWsmDbsSZgZXHVTuRhshFR4CMmc7WMRkEATER",
  "key7": "epemBJxAcjeNeQzsF3SfqEHLa6udP284tjGATTmG2FuyAFHVg6BC2NUB54mooJbx7UrrwRcoV8pd4VDaS6vcNqc",
  "key8": "3uvp2SrgC142f3Xj8gwZ5QS28JBa95XFSYJiYiVfGSVttSEnZ7BFb8dyQ3scDMfPGsHggTu1pV1tVrHJNAVJ8Dc4",
  "key9": "JktujJjxuCwDaM863ubbj7w73q93uJ1t3qCyYqvFbEtP43EUh2vriCaBmeAjyJaSyRzy3kDDtvQomn4pD2za8yA",
  "key10": "2GX8YvLHay4p5VHxNEW41FiovXWSbZwWYY9Tq3ECQj87W7oYTh9FjpTBNTtqLdLxti8ei2SLxsJXzJ7i6wVkrbXN",
  "key11": "2S5E9YMfKyv7XVdk7ugJj2c26mvach8tAgbnWGy3X53EK88GRUSktcNVKTtiazbbxBFnS2HKHXZ8UzLwRksDHkDi",
  "key12": "4GoFEnhcUkba69Bk4627EWX4uksQcej81TNuYbz3D4JRTZT3sQDu3GRRxgFc8sKeuZK4EnnjhafoiVmveuTjbya3",
  "key13": "4J19GTxnrc8pM9f5D8acKxpjLp9WiGrTSg1ng2FZaK57y4pL6j6kAdLJFnvZM7Tr6MgBah9NEc1vNkvr4ShNTpih",
  "key14": "3bYon6uz7qYxW4XKSR8KxMJR1WQkwrJi8UeuWdBUAKHGiSwAwMJW9DGTXK8mrYYBLp9L2yQ5TbqKqFWrExhWu4Gz",
  "key15": "zBETrQxSKAeH8xQ5SA18GJrB1MzMidGPHCv9q8vVBtggE3PVhQdqubYHaEpvxM4JoSotgTx7n5x79JmniPdJT1C",
  "key16": "5nRdsy3Zs3AKYCdA6wKW5WSp7e13iYuWQt8q5xThxcCC1qMxFbWxtMFo5B9Q1QHn59sg15qx7KdG97MxaAdJCzbN",
  "key17": "5k3y3MjJKr231AZCTzvosgw1qJ7sPZutE4E56v3GaDoBvpxomCuK9hXy3aZVGJdJHBx5QLq8E93yjBpSk2mxc3mh",
  "key18": "5fwwpfY2URda556TgAkFWXvFsZenPU9Zoqg3SbjvZRkM7BVTyhekrdU63rzMSBhnDpQDVyWJVphQ6duPNLKtop5b",
  "key19": "5W6s7ipvCoTwT2V5tXNeboob9jwHqrWobLCuWJxNuU7s6TNjd2So6E5uEZreMfxrYbezjYH95zZFd5J1wrVxkM32",
  "key20": "3bFpSCicTAiDab9MBnyju7SmSnkfwNdg3Ftx85AM1xdEoSD1sowunhJmFXF9NzEEd3HciBbBYhuKvySarUTD9Zcg",
  "key21": "3Zg59yLgemnnGonKTr3VLEfTJeRoTuYb9Dssg9uMtUDyzqXyECraRVqHyEbtcXphmRgD1fHoKm15TmC6wbnczWA",
  "key22": "Ltjr8msfXSBi14VPQsBsS5jRN5zNk8ZfkZEZ46VhmskmZQLzzM7rhinHXHP2dX6PmnpBMe8VmztJpcNfP3Q5seM",
  "key23": "3f96Y6hA3pTv7t8Emh8FiCZwdc9EkJG3eqLvJ7MvfezpmtYYx2hbdSoKx6GcEz2XL6A88evxVERaaT6T6SvzUfFt",
  "key24": "4wKHY49rYvqnMtd3H7gw6BCnApUcBLa1uJ7AHB6wPWwiNm6DG8gCA7rDvtYGSqiW7kogw2MsJW6KfoCgFsqcZ8ZG"
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
