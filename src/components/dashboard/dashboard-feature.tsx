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
    "2a5McyMZxfuCYHpNtAF92kVJWP12xbSh2AxmQErr2uFMU8Mn3q8XTZxyVgNrKVwitr3wdUxr8amacWjcyqQGC152"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oETnNKESuKsafn1ZPvKWFKZVY1tpZhu8izsP34FBxk4o268M6hnNLLpKxFFTNuCVA69NTpmijo7c2oMd9r9YJPk",
  "key1": "5adkX5VkE4mFb84LdrzT2NpMBmugMAyG5Jg5aZGVTNJzQdjkBn76S8JWEMNwZxR96FzxtGm1SU38bhyeRGyVCE6o",
  "key2": "3mffViSv64tVXd4HSS8tWzD8P67EcQzKtfeXHGnhtBDt3Smqo9ieUiKYwVQ6ryyNexc2WWi3gFtWMdnnTy4BFEJr",
  "key3": "RKqsbTwnPUnEH4vZrXmA6UTeucvV3E6vxgL9Y594DdJD3QJHhC3rFqnnHBa86WLAYQXS1D5gYvmMfATYccJjKaS",
  "key4": "Qa6ajnKP8sWHq96K9gadn4KXnjJKRyQMCLbFGgcMr9aGc8yoNqZzjoFb7F38bhCJpDYfPaurT2jxq2HeNM6m2Hv",
  "key5": "4Fnr8QgWWxqcJFqmNJgiybUKoHpykjcgax6GyyVNUXqjWczzgi8RErsftnPWGUV7bgsWfJzNGynuHnfWqDBu8Mu7",
  "key6": "5Kz9DvBQExKnkhiAnr8criBtEwDKgHeUCxXdMAkdk9VRxS4U7P5z1CDFNFFTGJhYyHWR9VCReD5NPcfzukCgN6j2",
  "key7": "2Lsh7vTG561fNMXVo1NfSkME1x98trMzycLEfecgAnUFofs9yDSuM9eaESgX5LfSmyJjmMPNJyUpsrxGjwFwEhDS",
  "key8": "2cMo6hHFcMQKxs5zotFbQZGEaUpy2hbujXLTMxwSdFXpx9JvE1Tc42a6G9HBCFSTyvELJ1dX9eU6ETNbzTGuSGrN",
  "key9": "23GP5xqpvqot3iBL39HkhJHaTEHkf3eiizusqcA5ga2VersXTy3cSY9joz5dGp4mFf3Dz7x7uHjB3SFRLkPxd6Lq",
  "key10": "5C5fAATLdhopB2WTKbuXo5NpWBkdmoC8QaiRMKjSqyUiRCJDCviHLKJuC7nXfLFUgMS56sHUnvwCTL77uuMrPUdQ",
  "key11": "cHYysUZCvPEGsVRdwy3aCv7e5dujtWiFCz6y4pz2a5Eso3n2Ei7p5CSJT4YMKCEGQjVQ4sSqmcuK1aWPVkXHyAC",
  "key12": "2T6oxd31qFqfa53a3i4esQUEoVTrSr2HTQbrGEkVrZSM2zUevnojyx3ZKsLqTNNUay15bYzt9Tauu835HE1f3L8A",
  "key13": "4Gf38rDWYAYqrAqLvhBsG6wpmxm5KMdKsyXjs55bwBTk1do2svuFWgC8cJpxUZeiENPzEgMLZSgjwpnWpCNJoGWG",
  "key14": "5a53hWqC9TnY71xUU6cSV3JbDEEpNMcDs1ibwt8mthAhnSHk5ZwQ3EYFKZ2pzdyHYEikv4taoMj6zNEskhvNbj4w",
  "key15": "raFA9ES7wWgMGDKegkaUVu37cWGizuVuxgdtKb1KbK63WU3BNptFjt5TKGyqi2tydmMBjoXEr15pcrhPmvqYvZp",
  "key16": "2vfYhnM6Naj9QPusuu7DKt7kc2GaJ937wjaHQKPwuTe3vfXqCYvSKU8JejBU4nMQ5oSNpjRTXibeue5JWbkiWP7m",
  "key17": "2W4Lebnum6cCM83sREF6iEDr6paV9vmSnvmstWQh2DLrgttz1qBF3uuppJa6setphBxsYoHVHSPPjxAWmEmPew15",
  "key18": "ky4SQM3gvJZ5s7QwATMU1Ka8S5fcz7NQ9jAaxe25S2qu32zhq4WUzhS9vWcnHZzM37QCaKxWR83oB6W6iEoL6VR",
  "key19": "4p6VWj2JCaq1akah5UgPxLXE1S9EUqGZFSH2KUKEgsFEjoJ4R8ZeZTxbKE1KKaF4sXUN1fV1mxGt18wyAAtBDwr1",
  "key20": "KDz1W7Lwz4Rx7kNHLSnhsn63Zg1HnaoFqNrgkVoTTsqqTiuZhk2c8vJdwyudDMJtMUX7EQdvWZR8zSkeGURzkVe",
  "key21": "3EuE2uKqj9Fv5Gi1wFuRATUwkSQo1zEXmP1PJnR83fpgwmFypgHEGwFfi23nwJAJSqE2sBop8GRYw7uC6X1Ud37a",
  "key22": "4DvrSWgJWwntfS51XM1QvqYouBiK1nsLrL2jYyv1isUBw57r3eDrrJGpApbmuHe25tnEZyQBffHjjovM9kRSDNUc",
  "key23": "5SQt4HZ7SnmR6Q6HKhRxsiguFfzwbRSkPz9d7rz1FNUqniNLZJ2MnNPEgUQY16bRMAC3YaobApdA54Azt2PqRSoU",
  "key24": "4FBZk5evrR7iatdTJESwU1MEfQYPo9HczdauhE1yRZTniHACArb5nJxfgY1g6Wox3ExE8su7YcBJQgyjbNvD1CGc",
  "key25": "2MEGcYxTd1e2tsEER6uZBB6qZJoYsHoSWYbjfN3HZ6aocHCDqhe5ibDKmXJ9DzeVt5EDFe5ruFfKduHi5vEJ2PY9",
  "key26": "2GN5dMAZFoXZb8aAYTVo4dmajtgmdfL1zkckE6PS14vXcbtpBqA3RRnikKRzV9Mthxs4aA1LEKpqFuyKaEzXWwyL",
  "key27": "R9gM2MkVtq6JzQbhhh6he66EKf96bvZP8FM5o51FSM6tx5EkPJYd4A5UKDnDSNgS8gYLLnMJBY4pJ8qWoMoj719",
  "key28": "5dZRYUg5HL4v9Wnj3RzNfhr2vUqtVpFmUpVNThGuVVCmEPhgn2kuTpJs1Z41bGG5e8u2hm8vySXVsvi98bVUJdZx",
  "key29": "4swfxgmq34HA5fi4CBJKTrU5Urpb2ryDoVFbpi4MmQzWAcZujN62tGSvuESPWjw2RQbiZvAkZihkgD96ZNMLGZgu",
  "key30": "5rk1VZgo8taS25T9Y5tycRWUsHYGi3zWnZedqUtVQoyxtXswEXjTn2p2YHP5h37hCgQrnzkcX3zfq5B2PYTDDvtn",
  "key31": "3f7b7AMYmpUPTkbvmdaSmYm2gYyymJxRm5LW6rfQcsR1YdvALXUh54u8dFCL3jTqpEoXQF4edbbMBCEq8UrYW9L"
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
