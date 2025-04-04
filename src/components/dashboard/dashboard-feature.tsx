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
    "4H3orsjZRzpuH5XvMEA5Gjtf5r8dMBeqLdtweV8EK8qbkGVxsgcT9hSj693vGhXd8Q9CKj9YkEurFBwSwAP8Lves"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ymo6Wo3WXX9KQCusjK9MQsNCqSKxJq5fTffsRwpL6AvFyUNtKBjbLwFqLLo8aYiQJEZVHW2eGi6p6F3Gg6y4V78",
  "key1": "3h7ddPV6u4yxbb82YV7agi9cS9SxxFQ4p8dZCpUUuL1ntXGTcgXfHyq8p2qaCsuWBkTzHkQdVKskf9eoNJj77CJD",
  "key2": "2Z8xMJPfcdugBfN3nmx88bmDPsaCBD8Wktjk9MC2G4fiE6LT7DPpp8YroddBJCMyyjfvi1FaXxrTnCFmxFH2vXSD",
  "key3": "3yDsxUEHxtmEj9JM4T3jMnMYjFsYZNmRz93STCspH8F2d5RM2TenpcfX4rHJ5iAu5d3nAivhv8KVXBimfnKtHffs",
  "key4": "21C3t66GWAxJWCyVSdk2TtD7pmTwQ1WxVgQ2rugwLpxtcwS3xTbc7xE8kxRkGfvxvAdWjC6LPY9epoLuBCTgxQTP",
  "key5": "3Djo6GDueiTMAypHmat8YuAC4x6SyFSqUn26pm67r9QpYFTarfNG8XqZafRTgR9zdYHFvABHwZUo69HXvjszHFca",
  "key6": "3P9kZzhdrqbzTrU7h3hc5oABzcsMFFaTAgAYGvefy4KDDvcBsKvKayZ3oTzdHTRsUi1RSWGWM1oZdKqNacGnggHC",
  "key7": "3FE3xATQWfSAzKinXyaCQLQTXih4Fc6YeCoXp3v13JutGiEJiHMwcFNakyQxpQYyh95QcS9J3dv2Mwtb2nANqBg",
  "key8": "5H33gxg4v6DAy1ZgfAt8fapgEtB75EPKbCbSNkg2odRXYVGKhFVL2SpQLnPYoYYZwmJpTyLFKTCevcS9e5w1jncp",
  "key9": "5ShUA8qUN7HyCjTKi6SApkYL3cd4D41TcKyvg7VZDRoAzWk23PhjVmNdaiN3MWrxUxrzhewxaSUho2d53ZKuyJJY",
  "key10": "5MmsunxbVpSxfGYTn7BEENPeK9fFXqX8N7ZPjQvDWB8ctcoFJ4tcepH2nSS3LCLtTVrtHy7soGpoQwjHAQqobwtd",
  "key11": "4f1e9XFys2imoBFH8Bu4cffKuzMArRoJzKzGQZ8aZmbS44iCBF8posYCYvqj93bBcQ3Ya9M6mipNademzUJMm2f5",
  "key12": "22Xu4Lf4tszHEPUc5ox9k3X4ri13pa9RtC5AaXE4GWGGqTCJvMx5Bu1SiACTEuVqf9REgm6uLKQNc2eA2sREVreM",
  "key13": "gnXcchmSn8XTZ6ubj36KWycchBkNTbo8o76hRYd6rxa6PFz8HYM2Z8ZBVyYZK5nJ4bS9JaxNnxTcwi5hf5Aq4d6",
  "key14": "5C4VLyyfZdqA7qKyBKPmvi1bm87PfgrqNmKL1YWCFh4QG19g64tx3FJkkhE5bh2P57LaZztqjMCBspMCmDHBZzen",
  "key15": "4EQuWKFNGBb2hDhitboXzwnEDQGqxPvoFUzWefMuh1YwqmS7HtMPvL3ibj3eAHeUxnzmDxjfFzS7eyadNDuhC6xA",
  "key16": "4dy2wPwPvTFZAyjUTRS7EiC6FqT6uTquDcnbYfE8xpvyZijrdW7ssbAKKLaYfnmzn2wnDAS5NHwWoaCqPM8NiNRM",
  "key17": "3YVfZop7yPA4TKocHdBEBBjfJRFjZ81iEsE5aKAtXkNZGgk1QNqU5BrsYUf6KhKxkgkEmox8dgeQpT4KRWP7FJoA",
  "key18": "4JSrHrp5qedcbB9K2m6ZDgppfRtVdUBQ1bv7Hu8U1p2VdonXMTQRV71ZsEb1t7Z5yqyHEW9e7a1o3SA12WwJXCAF",
  "key19": "5XxPYWFDrXauHcDpuzG5jbme6PcD2ypbShFCbfpUQqu5NbZQubyWq76EtE8LgWHTzy327ViSSSZpzmLmERW4ism9",
  "key20": "2V7Jvat6JfGTnXfAwFCgVERhH2KFhwew3oPJ41y46oDdb1eVSkYz516crY15XmhVSac3aCfwtumomXKGwkkhrrGN",
  "key21": "5JtiLtSWxni3DV9R8WSEG81L8sAnaabk7JDMpdV3BWi15Wckkm2mAdKkKtChUwcexsAf4q4kewXqyExVxDgBXCbG",
  "key22": "4okgk95kS7uEMpdBo6gV6xTcgXBoFgcoDE6qfixvDQXSfWp34J58yXJC5GMaGg1r7BRBny7cu8c2g8LKEc4btuWd",
  "key23": "56o7VoEyrgx5uGNXTDrF7evs2TTAKW7DBbaXqYAB9jqYUXKMLacZBmxgNPW8UFprqbDgFh7RxP8fMcXFVAubWPsE",
  "key24": "489bi6C2W72wKshKmW4JpELu2H3g1MgLjoTCdRQW18qpwVnzquLbPV77piDnG7KD5NqqRsWrp4W5htd7YKkTS31L",
  "key25": "5L6Uv8b4FNYkgfSVfFEt1ywKvnPZLkVdTBoUd4jXB1TtAXpTCygfbPbtFK45XcVmJVEtZb5WtKton7QH8XdWwYYA",
  "key26": "2oHhsarbvNFVGZEraiow1h5Kj9kuJUSvCt4TTFzC3KUCDVG1i9UsYkRyiv5ZGePsh884V9KyyX2o2obQPFw7J4We",
  "key27": "XTLDBcusbsiY9pFavrFYpeJLfpxqKEaJARmzhGaFUcp62G7we34kbeqVNysK9V7F9BWndTBqgX4Tyw9uw5RtZa4",
  "key28": "3RzTcaB175jxnRFH9yqEapZRUyRYjdWcq4VqQQKY9oDiVY7wiPR2bozF631PTWrUUsVduDnibe2uzjJLogfcH8Ln",
  "key29": "3FajNgkLcukc3nV18XU9vFhNWFXPEv7GfXoLsNM5xhVpFM3aryS4q6Cox7nfgBCXVQPU5Q5ZvrosGp5Ka5abLuoE",
  "key30": "2KaRyKe1off2BxAjo81etSwqjaywC3DZ2xQJ1q5wptDpJyoSLJzF3ysp24mZWYgbsHH8LX41YW4FSyfG3rEJDEnb",
  "key31": "3oHEicse28B9jPrwnUDsho5cWikeuv4CEdJuARQYpM4GDPpE4CWyZ3HrF3bTBKFDFgz5qVGNcx15qJhzHS4v4sa2",
  "key32": "2CVnEazZkYRtFSaRgGGGsDmHzJNqdmFDx1JVXwsXF3ZwGpmboetUAL7JDQUbewBWzYhcczkEmPwed91Ebo16GYwU",
  "key33": "aSC1qpAdoVFZbGiwfB5KTs2kRuHok9a3d7WqVwpa6PBFDVPFkEsqDnAB9RXxcGapifxg19xmeFQC9GknCsc4M1p",
  "key34": "5QVqKHeGwv3aUfCcoRxQ3KA5wnAdybaZJ611UWmjZ9GagoR2JGKqvduZAaprFkUAfdNMh3x9ZazFoEj8JqiCDAmZ"
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
