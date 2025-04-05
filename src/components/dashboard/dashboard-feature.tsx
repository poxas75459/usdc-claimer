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
    "51Nmo9cnGsiZ9zaAwWcQmJjrZ6cQte95eneyyGDK842sdYhLVPDXcK2k2FqFD2JLu2Y7otL9jmuDXinXgwnxoDUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s8Ev8p4KSYYEcjEdNhMaNPJp49QyaQX5tYsoEgkzRfJpHF7S9UVZofNpk8PA99Fq8Mp6t8Gyo3akEEuftrGbThQ",
  "key1": "5PN9jXmzYfz1vBC8sbtfPKLeXjc94rAN8oLbV2WYtvj2dGKeEhGi5BVfeBkFsH3Vejuhw5KJQRKMMiPaD2dxSrig",
  "key2": "mr68HrZsN4zJoEs1puTK8SAsCfu2eX8gdnyx9KR6vfwzANHmdpvRSh88KHMo3Ykd7dvAvPAqepv7FABYi3cX6rp",
  "key3": "3mRjUa2XkogziPgn1dweFXEYt1nQSSnmdM5577681RMCkbvJEbYo33gXHSsR9fHvtCkE56bnKaStFGKR3Dof9nuS",
  "key4": "5H4s5BXoGJn1XRFiAArnjt2AqtgmHBK1JtrUjjR2SHacsdnQazw3c9qrUtTmiX7yWWrYCHetP9KrJaqrh7UJ31uU",
  "key5": "Gig18u1ZFVwUCsztWMznwMu9VJhQoecp1NNxPa6ARqYWDSS4hM1FMwV1To4w77zeL2egLNWmGSwrvJwAKEfUDrU",
  "key6": "3idJMTcaNVRa8v4uJefaANjEya9yz6SgMUZSj1frtpSVUft4hCeUCBU1GDWbW1X35dEysPYMUX9RpoArJy9E9U3V",
  "key7": "2yttpMkcHMPmNPNM6an83QhZ9gwfb5woecGsvgryJEfeQ66a5xKqJPP7giRtkC6seJMFypeATa2jQQDGa8W9osym",
  "key8": "39pxS5WxvPfhaZWPHQMf4ysHnDiUhdrVdcELSDT8vwYYqb1ZxkPxLwGQKhZX1AGkZNZNhd3TU7PVmE8ynxXLmyaP",
  "key9": "485cjjiDmZSLXWwjsFsWwgjeZNFJPWofHtLRfotgG6rX5fa4U3e1GM1tTFHwsbu3D98zW2a8nHFhYTXaLoUX7Mkg",
  "key10": "4PPxB1C78hS5FwTzQMV1VUEJSMZW9tyX3MdFNtQ6C9Ua2cAkFBvZVdcCrpZwDeaEHoLdRLGJwmA44WU8fPJrrMgq",
  "key11": "cZZHd5ryvHdxXryNFvfDp9pzGMjUWuH1FNqqdxRSfhJ96h89TGYganaUTCqYagmNoz4v84GEmwzgEnQyiRhK8Zw",
  "key12": "3BWC4RprNiASwhUNWBhXQ6q2fJPJUyMg5xQdJmHbPUhUsTheAMnBxJAcbBnvZg82FAiWvivAsmcjFtwDAMHXjHFV",
  "key13": "2M8ekEj6BaRhYdVQATdyGTPzetRV53HezRC1FGPusLi8vrnYnne3yP4qnixxxbGPnAimVnxq22cwqSY7DR9bGguq",
  "key14": "5BzJG3cAZj2CJuAxUNgkrY9CTzYEJA97zaNiqeLJZgrFCqzCBgdLfDzQ52bccBFFUtrQGnct7Zpyu9Mtq7fzwJEZ",
  "key15": "2i9jtw8c76jQHDQqpfhwj3z3seCzsjapfwjsbdTmqHvBxRRX1tJi6NU2G4ww2Ebsk8gNPEwu8dVNVBs3n1iKPUx3",
  "key16": "nhC2RL1N1X4x5hd3zsu9xSekHsTrZqaHCRZrMBmsLhZjtQqYxPkr1iDk7xAYr96xBX8KGDMAmpcDxJvVqyBC6JL",
  "key17": "294u8kDdnmo5KazKCv6cYeRYXuUPvdCxWmWvnbwwZDkPsb7pV6s7eBPoM7DigpfF3cWJN8CFt34TXYYA7LJppqSG",
  "key18": "66WQ63pCPUJmPjU7ZH71LwQYzBJPwXb13g7GHELahL9q2XYScCBNCR5JSUtCZGJkKNPShFWkST9FwEydAsjoXCso",
  "key19": "5fm5ibW9b4aJSx7fFVqUtGnyim18aYEUrNryfku6gEQtPpycqrNJdWx1GfecdMn5hjapmw9RinjH9RPL7muctMde",
  "key20": "67hzirwp3posUGf9CXVNsbfbJAK7iEduoD3Zia3WUkJWDqLjY1FGZGK5ff1Ga77oaGtJQ8r6KF5KrDKpnQo68HQr",
  "key21": "24zDob6K42eaMpK8sF9k5XXtx7YdW6wbszJD7SLU99881bp4AqqZjtZG1CDbVUfd7CDy4h5toDkSBBPvv16CZD7e",
  "key22": "27vhaNpi2yFD5yMQtV3wEpBR8CrrKBAFNe7sXAPQ8b21JZhmu4BHJVsmb2syZhNWKS4yEu3WpYTbAS3d7hMw6YEu",
  "key23": "3Fr1bihipN1aS2wzr77AwuGbiQU99U8kvpoFh5nRcnHaQy6Lqq3K4RuoXtcnrE7UiRV3Acqc1Y9yBS4mhikqnJYc",
  "key24": "3b8u3ZFAyfKJGJ2BYqEAALPSidoApPcnFkjs4dXZjJUbNmeR7ZJApu77jT6dzhMKFNs8TKfSBCieCguXKjbGAUke",
  "key25": "29K1WoPm9QrS3BXyGP9Kqgg23pwsuQQhJHdNqCNAk1fjcuwSwm12NPFJp98ytx56YCGGmetfC4eJzk6QRYuvAnM7",
  "key26": "5n4fAV85FvYVd2WYAQTpXX2fd3tHcoia1gy7DvvDV2TZ4DTkoUD4mHPpJLRbAphRktLZofnVFpZC1mJhqGURiCJ1",
  "key27": "u3Bq3oZnb4aTXZnsqeMAfrQtPc9fhNiFqZN2ANAFRYvRfun9jHGeT2qaSSj872PqcN1aYMpFUsBKHTyRA8GXp4L",
  "key28": "44FZf1Fpt76wNv5Hiib4nbBHANTajwySuZS2f5JvpB1vhZz53y3KGGENoegAc2Vi4mGDcFtwUH78vLVi6nQkfVy5",
  "key29": "5cd9RiGhNutB3SnkTRAhwXXA3SpRtp6EpecVmxyVJaLCkP2Kf1ugzBFL7KHHGki81X7hRzYQfeQxzRSs34XzLw5i",
  "key30": "1aey1veNagdWfLSeyy1GahYjx691Ndvx3KRKZAVRGtzkcKnPkn9vsKgUwDiajZD1UucGKkhhPaTH742myps896",
  "key31": "5D11UvwxyBH5vDaqt2sqF6eHuAVnLGE97tYBhvJtHnC3MFqezhQajWN2TpPuxFeU9iKeTzkcPKwcbnj43CojRFQo",
  "key32": "3Fezd9NUTBEH3Dm6o9gcdhPTYmfhheR1phedgZAv9x5VLYmZZZMdUf1DsRRFqgxC1M5aj3T6BV8qRfpjVdWUpxDj",
  "key33": "34XJrFTp485fA3hnDeZTHrK3GWZwFE2BoekF52PH3mU676QM37bphvNnMXEMyiPP3JnkNK6MZqHgfMWmbsdZXZdr",
  "key34": "26bpqPDoGag2CYGVRtDNN4MVD7k1bMR9iRegG1wsXPu6VHid7kAKbvycpxz27bscFqh2zMtDSKwerLqd4VPV4WK8",
  "key35": "5ZHCS9gReh1RktHkQehi48D7v7MqGGK7zoccrwmCPK3NwJBjPsuTPoxdfHn6DnV23WYLdEPJURAgvhmaAmh7hg9A",
  "key36": "4q3GqUM9GatdiC1VF31Lzbzzt1QmsbB9mUYyFWi31omaviu2A9WwAKQfPzsLnTTeFsuVHBAyAA2SPocj2Ga6dEN",
  "key37": "3oApYTEUjLGzaxcfUhxHHGMyNN6txodm8xKqQFNupJkwyw2yXnqLT9XTGb1i6aBgeD1qVnLGyPX6wfk6VN5b7c9V",
  "key38": "3rPLf86feoFBgp3mwzw5XAPWyAfaPUattK1P4hfkYD3TLzotcG38pKMqZzGobjwyRis1HEafDE8AaSnBYVe8RsTk"
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
