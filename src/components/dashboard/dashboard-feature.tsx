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
    "24aVAbHe6rijxVuC7pWxSz9H5af1sFuLgr2YYvRGufGPXQfrHLcu19gMo7RGStWPLeJxM4wJWpKqNFDnqF5XQbei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43RxgaDzfhmkMrZ9ghGmRG3hkVfm4WTXkYyjUZKveabXXAfTJwhDqShxn96mU5MJjY3Cb8hJGqdrtg9adPGU2fWf",
  "key1": "649in4skqvnq8JZ8tragPk8N8feyWFjVvyy1oxsYYGybD39oKdwYqmHyC861QVTv8Z5uuAvFSiW6dZNkBh6SdVCi",
  "key2": "5ouaKvqEyQDQybJqYhbyYeom1xsPvN2nzN8yig2a57KDs2gfFr7Rr4G4DFeuZQmF7HpoopKCnsK8yrnZK2Ke3uv8",
  "key3": "3aN4i1WUWJeDPHELMhgMogmhrATLPhBwryqk5odZu4ngXL6rAXLhi2vy7Z6HhW15s64BE24MkjLhYNFtRHbRgDZ",
  "key4": "31HWSTRHjf1L1XJSAMaFqSwGJjUXXDrNtKA1H4qFXxgGQN3FK25krs4X7tXfvS9GVg6VxzV58jYBZqei6dBV3aFs",
  "key5": "3Si6oM8DxDPmXbqhdsbKyR4JS4LGPNMCt3dp3zVUgSQf11PewcpjgNT3yBj3RdE9MJenSad5jXeWE85ZBpYMPceg",
  "key6": "44hXzuJRsmd21eVpcwwkvXgVWS4g12a2a99rrTHvv5F6MrM8raEoYhekMBqscq7vbPqFtexx4dLr7VrcNwhScjCD",
  "key7": "2FfHCUtFga4XXw9Vf2LKwYM8Xpq894vm3GVsNJ47URQvwyfySPJ7fJdsrJay4x52zRPLyLWZkJc2wvib2TMrkFs5",
  "key8": "31PXnzdeaTFJ6JEMG57jDEB3pzG1xi3HJwQGMrTPU2tM8Td6PhdRQH65TRBQMZ2mtG8riaBwzT6YrTsKgwv7X7bg",
  "key9": "qco86fmJBeVJHVHyZDxJG8KqnAst9h8tTsZ81w6HgnKEfvw4Cz3GwcVA3C9NwmDg6EbSEsC6PcdAMLDUEqK1nrH",
  "key10": "3ijdTKTDCdcqkjbGbjXj4WEu9jCTS7qkQPaoCC5od2edq7QLtZcfTt2MZ1SP1SgkewPgbrznrXZfXdAtkkCi8uCv",
  "key11": "RfKu43d5VKNmu54qo2cjQ4XHSQy5UuMDqdNHHf5s1oWMqYvgr63dyvT4raDrhj9igbyusUvytdaFmyhL1WMQbjp",
  "key12": "cdncRfuDHVngNqayvREQEG9PT64jsiMPDzXfg7rwTVaj8ayD8uPkBqwqyTABwogoL5RiT2LemNGD3RsD9PGBMDZ",
  "key13": "zc2quknXynj8fLnwopJ881Jk73nPYaFAkxAvbtaLsLLW1FQgAq8RzM9YUSfnrhksAVZRf3ojDB5Q4nEsGXHT6Jz",
  "key14": "4NCcf79P9Zau6aYaLFrvJSiwGd9r6tXKeTF9Fc1dhX2da4MvDRLKcYXPAmxzpDP9x8nAFKKgndGQ1fza4mMTeJbL",
  "key15": "2HVk51RmUEFJYp7uUpWdkCRPkuAFDzyz8nzV9qKpJFri3D9cW8D6MgEY1797xUH7bUy3ufjYPgB5AWC3GPcfBHPi",
  "key16": "44PMqdZZqaFJAwdjsVvtsfdP9c4fdawAK7qkgc7UiX2g1u2Li6MnP6ZDtcT9rqHBigBiHzaY4FegeSJtoijNWbUe",
  "key17": "2TgUo4YkqrQFiLkN4aRC72758ZbwBy1pxrAB48oTcfiEBNGcgAS5PCyNGtt3HMhMVWudsiMSL6MbTY8q54Ceh4A6",
  "key18": "4uHuqc8opusDyGHCh3uqbsLxRKK6vUC61cHPDVSfvo7pAtxw5UsVDXTpme4pb1kKFyWAS5zoGdk3r6nSJ8usQAJH",
  "key19": "54Ge5ReKQUda3ZNxgtq7W6XU1BzRB7SHDnCaZ5pZCpMeSfFvnZiSuQuFCujZ9qfL3jQUztqZoPr8ikUrNDupB4Qe",
  "key20": "51BH3DyhXC2bbqz5SjndgP6gwZ7GkRJ93DCRPM2D6X7aXpGVpqHnuTQNbknHGZPpspQ7Kdnni5QBm1qvwmTp59gi",
  "key21": "2Kz18a85kzxZrS9wuDhSiomcoywpV1MCxX2TrExq27tE6y9ym6L2DnM4PkZHsGNurSnBxHj7ZGYB8yUJhsGNLCfS",
  "key22": "5cjxVMZs71B754Tx8XFTvpTeGTvhYBoHa5RrcZK4FCx8wrrwHBapbceNBkYuvC7hJKxJTrB8YMWWMzjd5Tj1KHEb",
  "key23": "3uv8xGba6HmrhFf556k45rNKMsiBMVmNHmnKhGfBazgizHhu3kLrKixfzQqc5NZR8D1XLReLcwdUuHZYK72N47GR",
  "key24": "4ChRCxpPCSGEEh2f3DBhGJPiNfcxje2WnnGsYrCrXoH2gUbrayM2A8SqUPFFuwUXa69vtcixuHfSLf8VRvtFLxAn",
  "key25": "wzVL6dZcmmMYcYqZhV8KcJNvEG2JjNYXBAcPBBAARkN93w5Xmus9BVLU32XQA9Ps9SQ2VcD9Fsrx4fz5yRXUV3Z",
  "key26": "5n8vb25tNdK7HYrt8oMp8g3UWK5zk4gfTApH69GUWBR5DmoryaJ292Ce6SfpsDD8UUDHN5vEJKDHxd4t2ifycCSq",
  "key27": "4sJBfGy1KKo2mZzUaujQ5mzkWXDxYsENHZVv6epknyJ6Xr3zVpASPE1joeCfuqzPmgonApNNUDfK19f4CVzLXgia",
  "key28": "2U3zqJetR5vFRUxrioAYP5RDsQSiXtP2K9SWZ2rGBC5E4FeEnawTDMj3LvSroHhoMT29duMjSXzNjK92q38icFSt",
  "key29": "4RNXjBccydsoY6G1iNqSfpepmbBNkosMLmDydama4Lkr7zUfdgkchPZRC8kdEjy9696buNWRb6eihQhi3wmkuoKW",
  "key30": "2s9xUvjbeHnvULfv8CGH7kR3bMkaTGCqV8jUGZkv6ax7qzxR7EohVH2tM1H3X2bx413GUHd5d2xxgJayjZ64akWB",
  "key31": "4yq4WcPun7ohA6A5VSZ75ZbsGNQVvCWjGznaySayN6eGi3m7ZvYRDtvWTnh4BjTA5o69513FoudaZfxXwL1d5zai",
  "key32": "5fFBe4uuA2ddX6pYJjcbEYVKQd87zyCD66RYzpMweLZhJYy4W4dRRW4Y9KZ4YAr3m43H5jX8Rzx9jFJwnkCaSwV7",
  "key33": "2F45YorMgjKh3ni5FMTVZ5HteAWEHyTwhLYSBrabkoMTL2FgqC2tbVVhxs3n9qR9jtQh2sxFQz9ijHRTXiAmA86",
  "key34": "ksowPBowKc9hok87aL2yZggSXcrdzW7DAePKcCPyaG9JwhSGEdd8Tfymf8MJouqrAGeByrwzSfN2DgeyHaSFhwb",
  "key35": "oXcf99kqwbhSssKNPqAPy9PruUGSmQNnyxgSjJD6eJwP4GWuKhgpMZbufRBzXPEzYvqRkgvehucs7SNgQQkMUGo",
  "key36": "4sgKXkUrPeCFDWQCJKXY54zpgYL8owg5hEFqaqd4HrcibuAf1RnEvRNARTLdeaVQiVbjN2ok4kyvoAvicKrK7fhw",
  "key37": "5wgzpo8nD1HxZBySoG9CgPvpZ8AL4kJCXcXJKwdTksQVdMGfjWLGUrM5VBamtHHLqevR3oSmNy6QRGTnDiiAH3VZ"
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
