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
    "4B2pcKA4SJMAUo27noHLxXTzg2FNYCNhjghyupkUf24ezgQnanbU3DtaYExEuvUrwD9zQGCcW6kkFdrbXuq2eXXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8aoHY9zV4puLV91Hwzpy93HFAa9wUhSmyBNbiVkyzbh7XuV1FiEjdxhczcLwpHqqr13jxh2PACWs8xDVTqwMrFg",
  "key1": "4tkYLbUBJNDvWHLppe1m716uH9u3dV4b8xahaaYUsCTULgeZBwjCT7P5qSnGZuhLaRS3zDtrE8LRpU5VVKRVUx1T",
  "key2": "QLMXKkDW8JHuXBnhHTqAfF6EMN6ZDX3vUGQ8AfDJduzsQfUdpaMdoLGd4JoyAfa6Vx487i4xSmePJmEcC6fLngn",
  "key3": "4y8A1RA5rJxLh4iMtMEHknuTA9ej2fRECBeuRTxG63fCaChRfrnakNXvQgVXtip4hEpX8zAJWW9uXyC7XS9Dojvv",
  "key4": "pMNoKcQMaDvaLCsAxv5kg7dVEJNP1ddF5ZdkkoZqE1x3tj9Q8Yxg4BRe9ShyjcdEpBPNwUVnqEvVtuSqRxPKA7Q",
  "key5": "3s8KcQVVSbWKAMaF2aFsxKk9VofqpAJqQ2fEi5Z6siEwk2VqY9NXm4YX8kA9qzt2YpXLhWDFBLbsBz1NYXU9jDau",
  "key6": "3KT8ScUHYXStrS9z9wucLF3SoUx8Rp24bXPB36GzKsWSDrHu5Zh2BmXpPs41MBQ7MEqGnLdaRy2gZG5cASbX4abD",
  "key7": "4T5KK5nc9KVNrKhhYhxdF9hmNaQTy3RRigDM6fCaWybc2G3SD3YWw8NcjcrmWeQ9ViUy3enB7G7ujrxcGYw93rqa",
  "key8": "2WBBL8eh8kuvTT8XcUdT1yzZJR22a3gWKv9ZXq8vTawrT5UHD4asP2vCEY1tPqjv6WCDs1NQTHo1zMeiM8G6zUsg",
  "key9": "W3rGPN4uz4ugnfK6nZwmk3NUZXaEXq89YeMH6TSo9RXp3JQeKnRMVkd8rBWN1z6FsNZYihjGqFY77PNpseifRbM",
  "key10": "62VTrFWcVYcmVFysLT7ebSHt37ghv7mAuttoQBUGJPtonebkos1XixXnp5vfUL6BCLS8UW484ccLd5t72Jnd3P1Z",
  "key11": "2bVSZnJLYSLJjocFDDui9Wojb8TjWjNWT7vYqZeYXGCDmXM2fujq8KUL2mQim3rqpBG434bPSeae9G12rZspyCar",
  "key12": "vcYTGrNtPTxWQ6yXCNVXEpydfPv1uMubeETewrNsTpwMLECVUcTi9PWdnvuR2yznXpzEUv3c6X62X2fLym8gTYD",
  "key13": "Dd3pdDt4i1YUK5S5iXfGQGGi3MamYiyNbGUNxdedVwLND5qJyR8qCibL68La2YJKpUe44umEJrYL7x6HmALjt5F",
  "key14": "3ETMC5ANTXqrASyMkbk27SB2KR3T7NiMx5cbC7n9EWkBsmweyFxui7tHsSijQeVuNHfvtsY23KTQk222rG7sxdR6",
  "key15": "4bXRzAJ9mYFv9VhScpGPs6MFrF972zUZz9jznXK8cKJnsmdTCPxYqtMaBwWMMK1FQ8qc7pdGcYA1PukCy5uh4NZ9",
  "key16": "2Zxen2m3cCqqe1aZa9snNPPGhkq4miRnd3gJ7XwLmTT5BPku7Fw9sDXLDNA5gWzpZrmPiSch7D61txwnMrAFC6B9",
  "key17": "4gQomvX9tHqCCspb2wFzF672JuirCjVuYYAgRcegtjvkaCGM9UjfwJmfGBa8tvM9iZyUMut6jNtuELuAxPm9Ht44",
  "key18": "4EdtLddMXiRDxzegBo3SJX7iFVQRzxnz6p6Yb3sFXPV38QyaWnH7pCSC2CoMDpKPX19PzYN4DP4DDccsE6Ma5wMo",
  "key19": "2qpTSgroEL3hG7yzZ25Amhqxeo51nxKRJSMWgB5vxTnQN1JZ51pzrgAgimAwozHW1xjVEYstGKLbXewRkfjsBL6e",
  "key20": "3Kb1g1HSqQu37BpewCMAfNTpWezvb8eu7kQXB9TbNc3Pvi944jJhNCJSsxp7XYPeqWAY55opJHegWGBqKS965Sr7",
  "key21": "2NcJsSELZVytr86CjkjGTkL8UKu6ttSBft6RT7sbX48Hwy6M8YZouvV8sKiCYhK665iTePV4qJWDrjs2XcAUJMQ6",
  "key22": "2RMtFhCx9BwnJ9WfMRHFTx75uDH93SNgwcuP4jcS7qVQ4MbyNytCDbS2J9uKK6GppXgZJGtnqsTqNGcVjFRTYtV1",
  "key23": "syqCQVBsU58HRk11vfDLF1sknKAAJuHv7p2X5ZYHa2GrxnhHpYVm65eGDJzip9ZhsZWMaouxaKJdXVReirBnCfL",
  "key24": "5a8T8HspEw9ujnJaeV94BRrKWFjY4qFGnq8joFWgVzXtB51g9cQJaXBoHZVnoFWp86nL14khjTsTALWbXPkWNn3R",
  "key25": "5yhL9xjcEp9a7YyxdpKnswTT9tEwo9QVZWFGAqLYYD7V9R12VLsJrEwKiWxcPndQjMcVrD3GVK7x5ufQh3KqQLx2",
  "key26": "2MgmPvxkMjYmYca7mtbXJ58ag2fzg84PD6ypk5saB6f2C6UmmwbPrV1RnRXZMnyxpRDtNsxmtHUqYZVu4nsj7FYd",
  "key27": "56gWWGH4HrEajW4MYf4uxyceLaxjwJ8ma7DskznYVDhZhwQFHVjcMFcM9PdJZ47ScKd2FZiJd4pNF8mo3y96rwEw",
  "key28": "qjFDy4pQLgLNpMA4FevM7StENyHUyjgFdT6TQ8ra7DJXzNGkkjVG6fcotAtsigxzT7HD1fHCN9njiCoDkRcQSoe",
  "key29": "2chaTdoocsVVnwPD4PsoXFtjBDY8B4vmtRggMkMdCesRo6jjzmb5FKk9j8pBW6EH8ofCwFdW1LkhNy4EnLy51gwr",
  "key30": "5KMoK5MSnQpZKu5GASD3qMtDfvvFBSGYV5u6iLGiGtghBWLYHbomkj1LuvqqUh2zyGwUKVXPeC2A3ercBfGtBoJV",
  "key31": "2zuG6w9e2c8LuCD9YfzM5w1DmoNLU3Zan9pSf981HMF4eBEzo6GQUi3QXrArEZ1RiKqu9y6LZP9g8b5BzdsiR6bb",
  "key32": "KrWnWTTCXWoa7GKsCe7ZYVJ3vQ9siR56XLjWaAne53vercSGD9JHzQiAtk9B8gp4KJ1J5EuKmbZyHREFQ9Ux9HU",
  "key33": "4JNStp1cDFwCJnCyx6EBwJiQRPxev21QMyNiiAbA4zsovwm2hgjLvkuKXowVZeJp5xDiPLsyGm5erwN3DoVsHwtp",
  "key34": "4D2GgqEKj5n76ZDegAeacWi5C9e6SHg9UJAZ8VL9UaMoeFHTJPrqefwZwZs3My1CQ92mj83QdQpbbvHxXEfn8AQZ",
  "key35": "uQhez6uPbLMMRA4pSXzvEkD4XGHTMLfyiMpu8KqoB9GJZ3cYRSpdxsgHJZhR2tdniLsoevPMFAeaB1723yn5eQA"
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
