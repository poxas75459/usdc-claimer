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
    "5W1WMKDXSEg9BQ2sGN3nLeL1HtbxrRv7kUmp1d9yNNgn5fgnKMfzNwYpTPivoAvp3wWKWh2EFsVcXkM6kLC4WVKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42CPwSReSG7kCo8zrm3hW7dYZCn96rJDC5Qt4RKs8axAXy7Yi8ugQ3PbS6V92A4D972c4zDDGB2PSgaxztLrh3Ap",
  "key1": "WGTjDFkeLjuWSAFddsmXLzNQvHoYQ28Y1efBhwb3q3maEYQTACgK99w1yw2uXrWa3aKDPhLBHVP6dTVpjT2Lryf",
  "key2": "2FsJjzvJ3jtvfYXtyaxK88vM3P6NZ3YwjM5iVnjh4q8TrF2gJYvAp9aqnU9bTenZxk1fq5WiowyntDcc7F35y8Z4",
  "key3": "WgBBsm4XJiepkYGpSCJMdzBMKAJT4N1mAKJJCmZdsg2nZsEBPHPWfSxKRSfynbLaExQd6LyopxZfhBADvShDByc",
  "key4": "2PF4pDVcrPS1QBtH8CLD7cRU94MtakLA9NibuFpZ8RxVZxXGqsDoJYTzC1zkg3nsWLu43ac1pu12zboWuhadGxm",
  "key5": "4MbW2Vw79cf3eeFkkwmSRqLnZpxqZhffo68CAUxQ7qG3d3XouRAwoZ4zm6Gab4kyoaBm8KijMkabPCa3u75TUVfk",
  "key6": "4Wne5ZxGFYjHe1jTFnLa98chZafvE9XAnSJ2NP7zGRTA6NMsxdsKfkjewniNwoHQmWLSL14bS9dwhnTNjM13s27Y",
  "key7": "5StXor82tfu13T38WEmW8FNFgUrNiLrCF5FsEykhkGJA5D92yr7hDCAzx7exjU6YCqn2HrbwwpUG1wz5osdpyUEr",
  "key8": "sRXnYKsgWN2UDgK1V5qQh3ELPmLpYD4GFEcBzh8K1g4658mhmiguwAR5FwkgVTv4kJe1eDW2uihfY4JSYriMUou",
  "key9": "2Ei9i4gaz88G8hdguxyBx58x9JCPxiMDEr5NNRqaSNyKT65kLU9qgPPimXUZgsbU4TmvQxSurT84L5t3Uc6QZZYU",
  "key10": "3he8szUCapRBNn7sRwWVRojUf7d8jibjSLyWnjdyo4haMsEDneAP755jhGKGGTrrn9CCHPbVMjrws8gbpP59RZe",
  "key11": "Jb2KkqUzRrm8mbr75A7eaV2gfRAT29vy36Vk9G94KiTDgG8hAHDwGxpMx443qFQxHaPQWqobSB6wNwrkT8qjpXQ",
  "key12": "9xS2PArRM6QJhcKQ6c6yk5eedd7GXR8MCVmkhtJLvig91ik34wT81psn8EQLaB9wCPKsk3aPCZPndZtm3PVAwTE",
  "key13": "2d8TVUvbP6GE5xjWf6hKaNmPcX1H71n5n4EtDQZi8BgNBwCxHFBEUmXyCE3T7ZAX252dxn1H5dht2zHtCostFTpJ",
  "key14": "2EZkrYX9YvrvJ4r4Gkn3tnzrG93182GKUeofsEiqweYWTpRKsPSBX6cJnkMgF4K126v9vMEd5Ch7LrGcEE9uyTVR",
  "key15": "cCYr8KGANkMB2HV4Ta48sXPHzXTUVQ7kijckQSaxNUPM1nBTJBS7LAzH1usLYBZWCX3vuKMrLdPwBfJB2khCKC3",
  "key16": "44iTvnQtJNK3bHod12funM1FmMHUhXBMjoswq58M3KiUFmWbfsfBwTFbV91iAML3n43PdQvFtFQXbXQvsP7ktaHu",
  "key17": "5AwWevRgUpvZxd1P7oFrFpUnyF8SyfvGnv4inDF6TcXgjwACTSYdpCgza7ttNdQRA1JXmagZMi7cjd1WfpT8hToH",
  "key18": "xTXWAUs2S8XmPtfAoZP7v2743jLBqqMmaCH1ug24PDyxh9ZA4VAQeUQmm4swFrqexEbca7pfA6xxJx9JEhkVn4G",
  "key19": "3pZvi2aQ7YAFZ9WTgsZUHmJf4wBr8DCfd7SCRVTRDJ1K1BPFVMmwwg8VzGWmRTJxqzcYkWfxn8Z7zdP6oGW3i1Yo",
  "key20": "4hx2BRRzZ45RreMnnBSc1tEi1prpHiV4oAKAgpyWumfD383mGjNcPuZ3FUerFo6ZjWVUSrX45o2p1gmizpzLHe2q",
  "key21": "3aHC1Yev1hBtmhth6LaqqPRjFP8kpJLn75iK3PSHAtUmSYmeunPy5vMkaksXMSZ5NoBUsrY9SV2W2wEHaCZ7R6LG",
  "key22": "2oVKchUpdssq3DJmkFfsUVTr8pWe7JmjKgxeDi6P6K1LupJtPAEGQG8iRrPicgumwx4mgdJcwVdPqt8yy9CX1XaA",
  "key23": "2euwNf3cEN5wsbpXi57SWgKiF9wQq3RmEarMi3C1ZNxA7oR23RpGq13uZqdD3TxyVg7VUAviPBYuRf1afT5xdmaC",
  "key24": "3ZYfRypqdpCEDiXqBHr5WuMozHqtfPH8trU48e48JdMwqyBw5BwurXmuzVKZT6mJ8hF54dJNLaMB87Q2qgRSSd3M",
  "key25": "4ufPsSoiY7ZAaepKQeGjtaaRGFks11q2HqUpW3vsUyJoSFrs1EBUu5BGshtV8Q1VUgYR7GoejnLVLpepCvo1HS9k",
  "key26": "4MbHvPdVapeLhy45cginm4oMhqgX8mxaN3pPS5rykuu7gishPr53ZUe8KAN7tHPtg9RR5KGAt17vTfhpfDqZeyjr",
  "key27": "2bW57HHfVJYbx64tN6XuQxkm8WDwbToYRndTw742sXEmu34FCCpQBAo9vodLuJ2pQEUKci1ZTdA4vvrfuDcydEif",
  "key28": "32JJZHVkkU9eooE7KT5B6B5rjgt8LRJm3nn1XUMDa7nPwShTjGH79pzfg3ArXExoTJam5TpGFn8EHy7JXtsmpFBA",
  "key29": "51P4n2Vj1fSqpmQfezVxniNsuBWLaJpecMCn9Mrx72G9XqymmEafQNcXLLLtpoNRp1P628mP4Fnn3CT2UyjyhpH3",
  "key30": "36xnTkKaQFXuj4YpqXeQPwJtw4mpxmLNHp1MyYbP8DZKL3pXnowtR5VizsShQaWiyfgbNupvGuHcqoejPxKXUdgd"
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
