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
    "2HH9u2bCo5xsnMfECMqKJqvkiysJhZjmWJqmSp1iNY542EmZdJWJdxDzFVXJ1LNijsrbbY9BWYhYbwjiNrfvqwGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XHi4Foqfia7NwnNgW9JMPPrgL3b6QmcP5MYDFSL3ivmrg2qcfGCUzhVHTef1CApPNExwZFSY6pvX73GVf84naye",
  "key1": "2pfVV66B8b7pXKbGiiuMmge9iD1JDR1GjSioHnj5Jnrr9LWe6YzcZaf55xr3L31853JWPmDNhYqpZ4pJBshMtWsT",
  "key2": "52hchg3WL1uNQ4BCzTC3YDW3FgENBjowcvSweJFLNtvw2DwvWZ7UTbkM1qrBBxXEnj1NL8tshqncaZKEt6PD5ttY",
  "key3": "3xkBnXChZ3ahUxKAEruN3mD14fZRtwzGzc4wiKt9QCWFELHCXo8P44frb3nYj3Wj7s7Qe3A1jdmiMNpXewPhuAEN",
  "key4": "2r5Sxc7AHMoGWhV88STSG5ErbAZtUp5riksRCAJDkGucXf49A9MAQrXSS6Ezg6wpM7FHizyGY1gvcNokXX64BuBz",
  "key5": "4JRPy2BsoF9jg513iHHVRwNYqWjs1aSKnqT1s41XME5nLP2yA3Xc6FQxK5KgMXDQZgK4FLSCshCC4LnhRu59YAaY",
  "key6": "2kfJ49qFM86CAJ9RE83mqfE8jTyT9DbQYyQSwh2BsPPJ3QanD5ag9CXguHTayqgm3P26oaxoQfa69JS35YfbWM9k",
  "key7": "2C5Vt5B8QBCiPajbCuufhrt7woBeUKgiH817R8y1xgFbNMyYzUWKBobjcdFBug7j4eyQHB9iZkNMT2oiedJUeqd4",
  "key8": "5ECRa9GyVRUuXZ9xZyojSoTX5ZGvxyB45Y1BMTQQh9WRectVgcCw6f7gA91tV6tCXuj8REgebxqVSKnJK1uYmAag",
  "key9": "22swKtATeHfSqrf75pZvALs2dLFkS5akszFkGy3NtpaLETx65jBpHDQjGyEiWrKHVgmBD4NhcyMEZoCTXwqUM6sH",
  "key10": "RYRQ3dLXBJ5c9DYCP4caaeSJME7DYBkAJNR6L4UYJyKg6iu1E63naY5PqQdMChUzN9fitczNk1d2p2ugfrqNRwE",
  "key11": "nVT98RmhewGP5LaijhrWpoHoeKpCoCjspgKPR4kf8q4cdzFQH99WgwqhF5pV3jKDG2a1taM9J61ksSD3Cunnyco",
  "key12": "4Pv9n2fw4ASnjwpr3vDrHzrQUhP9dgv2jJurhb2X7sTcMiEswjjBuLWbj4k9qxjAE3kVHNV49CXHFnEd6YWvk9go",
  "key13": "2GhQhEu4CWMJeKmTohzosgSgcFpSeSn2Qc57cku3AYTAVr3rCEkmJuf1FwPXttJN3R3VrQG8LZxBwpxP8b9K3p7",
  "key14": "5WY2bncikbyK9PEL3kYszK2b293wBkEGrsZGCxUiiJqMEjLAYwRUWpPUT8eRSQsqKnVZLmuyJxctrDvKMxfJbFJN",
  "key15": "4mat18W7qiYraAYaxr1AG83kNFbngfR4PzfnpAqHi2YNKSaEv5kA4cpdm8suxRcr2dqb67d8oLYcNA66QtAsfKLe",
  "key16": "2X6annFuGtnxWJdZdmeR3gJoVdFmUDjncHQGxgJpFiUBDSHBtyLVWFvXdGEhpNbRXpUaBRVGgJ7pre78Tsf5Bx44",
  "key17": "2NYskKUQu9WQUWwXHPFF5aFye7PLoPkyZGFQQYbKR7hk5AcCm8ohmDWzDrJcZb8oWDHw355RdZQ7EgLaqFA4ubog",
  "key18": "3huNaLRMH1ouDPyASmVW5S6Kib9CjyX5sJqd8yuFvTx859Bto9JwkJUiQjW22YSqebAMnZr7TjoGN8pfT46Zi9Jz",
  "key19": "55tpLbPnx3PyZ7DtyH9CyqiJL3VBNKf87CCAEu8osrfCfzk2Cvr2PguUFoycyVZhzZ43Mdn7Bfm3Xy8pdg6Dx4A5",
  "key20": "5CDvKjJPK11YttYhHXma8Wcs6C7k4CyfqsFqXPmEMjU56FCTzxGZ9EUomUdZEjwTsf2LrejnpTVvrcDRuX4qLW43",
  "key21": "2ZEw2vHPY6SSeumxsXDNmgLezvz9ofjZYT7ZMb75iCEh39ik14uXQUQ5ZX5rJuRUJccvLoU992VX2VM8DRqvmz45",
  "key22": "SEj3ax4JTYVu1htJr3t2r6T1bcDacY17WeFwhwsGChBECYv8Cac33VFvFKYASMDRCAwjLv51Zb4RjS3Y9Qnzgnt",
  "key23": "FrEqQFGTN7HNqkH8kgN54VWCzc3jwwoRrsNutM1siFjtEa1aYP1kcY3oPd9yoGk7eMYaXnbWsmjj4ZceMyRB67a",
  "key24": "4FZx5mQnCySJEv9S3DpFr8jTJnVrQt6FLarbRwEQWRZjhtcf3U7mjhm23RqGp9ChoyCnFt14997H6vhTwYMmw4Wp",
  "key25": "3KumZJw9PWJxGN1e4qjaLqvV6Cx2y8WUPWZg2hUGBFbpv728dRgJ4GKJ7LbA545ooT4qeKrFGR5Wuy8RmJxJ3YCy",
  "key26": "2JX7CkXZahsNrzmTZvs3eCuWLsKHgGifkHB5ayNx4yitXmmEqTU2sn6yrDY3DArtpXN53sH9bq4nN19SX63pMuMo",
  "key27": "2nBBz6n6QTsNqengmaE2691zEkVPZkgocMrjuayypqxZnXphQznNjnD5JbgoSZY4gPJMBen2iKKuGV2smR4SuEi3"
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
