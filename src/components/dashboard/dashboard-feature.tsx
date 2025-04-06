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
    "5m9bzd8zyzLVrfgKgks2nU9se8og9ZKbXBiU6e7FUw1HSCZEzwU6vbEqZt3KeENxfYeK8gxDKKvGRveTZHKWUE4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ynWj7Dcu3tHcfxhsmG7VNSQBfiDBJ7QCbHpuZHfv9nbdtetPi1RSTffUv43BZkqVLdzeh7uchroMR8YbxQzSwB9",
  "key1": "jpe166BH2A67SXf8BN4iSCFs2Zzy5ARaJRq35yd18v6VB97Tp4A3d1DN4tmZL1nWC7JPmNDJNb3BzaiawV8XNcF",
  "key2": "4vy3j2D32kHrumoxTtDAf2ggAvYyDzGVhRNhgBnfAm21a8CsWGGeBkNPPjetxTB4DK5jwXqKQ4g356aEVWG9KiSk",
  "key3": "3u3rsdT8ACmRec8vViC4gsJtVk5E1ZE2LsgCniJFpfuixjMyf7GHduUS9C2PkCWrXfUN5hHZfmWouiTVb6Yt5wZc",
  "key4": "39TDp681bvFmXqKPZ7E11SxCM9JMnuoJ346bALHfYHPzVEmMitvZzx9kfCpwQrKj6R9f4J74kJQmzs3uUqqj8d5E",
  "key5": "53iC7JVYDMpvBJS2nWcP56Qjv61NGkp7LErodkNuhvknnhTFht6Qz3J5awKdYrWjivMxekUzJs4uW3keiiAVPegL",
  "key6": "4XAvgc5G9imD6SRkdKqfN8cMGw4d6QVuYmixjUQ9tftw3aXaerWy4ch3g3oHKmeFvtTS6x14sfBpdSm3biy5PK51",
  "key7": "5WTRQZ5GeMk3VN3sdMLjFYgBZjxHxBTe3Dh8bU1SeA1YnG1ZoBMuuu6fB9Q9F5pqodBdvAGPhaz51dqfJJ3oStAL",
  "key8": "5Lh2g5WXfbxV7JydY1qyftat5Jasbypi3MFZTM4rXjkcYpfJQZttSyvo4RRcdQrzbzQEQDKEwRkpSGckxkosWxYh",
  "key9": "2BWVgXBBS9LnRsWF3wRt3VjyKyRWpLRKCshoKPG4wc95sf8v9C7S1NAPPHYMAvbEghc9hskercKeEzFKvxmFDUVv",
  "key10": "n7tjPp1iHmY3jY9jhsPep72JCmTUR861FBMLrhWawA1rceSKwWWD5pu8NFQLDVqUMKZMCVsa7u6VLox4A4kk2oB",
  "key11": "51oQwiCgwtAMKWQSET8EKi39i5qAELy3o9XyX3ocahmgWtwJwoqxzpPS28da3u33fZZyF1LLVfYqNvvwZqCTVCeB",
  "key12": "3imi2oFwQVfNwx2QemJjqWAgwNUwhvoSF4PQcUwhKwSw7wD7XGWr1jaTLr8RJtKy63fRHgq9MkGpNkyFx8Z3A62s",
  "key13": "3E2vu2bxhEbP47mU5u9nY45A4pHkTzxV8jLHVssricLLV7tkp2LnLRytaqs8U2AvMuiycwnuJuXkR7wEYjtpLVkS",
  "key14": "5o7TwJXPyyE9DttrbKM8sFP7pMFUufBo35wu7kkc1vjXih2Wppq3Tj5hZYPYBZMbYc1XMJ5rG2GSFSqixJMZZ5pm",
  "key15": "3EVXERRmVJ7XogkeWHmeiymGmxMAZnUP67Uw5eJBehnNVnsSVwwWskkpRfsfrpHkj5ADABjDTXAYJz3vTG9e3Bhi",
  "key16": "2GV5thtRtm82YAL7v4LoM1UQRxFVAi2YVNpDeDjKKQKJTfzjG6kWpLjh9nGotriSicgt49RzK1hnoTdfRYomsPbo",
  "key17": "HUV2NyeNd6awaPGjsJQKUPQua4Frbo9G1wksRxSY3QdgqcxyanGqDugeaRUD2smZ1B52qxrWafRmBTprDUpKFEx",
  "key18": "29vtgJ8PWBngysXRvyjD5wjm14A46nCgiZrnJQn7XPuz7XL1EHiJidAH6x32WVaacTHGVtsTsXuY93zBDX1kAtwX",
  "key19": "2qF2n2WRvcFA5AhjpaT9Xs6XjecGg36p5ghVuEs7WxZAvbp5eZrKH3Jx7VQ448LTNbFQA23MtzSQCBkwSrSx7Rkv",
  "key20": "5rc6ATZqPJ5kJLfPTCDG3fE3xSRYWdC86CYiCMXG5F33eX24W9bNPn7ECaPWacqDF7pQQkiPhGv8yneqTmNeAubB",
  "key21": "4Wb2TQPFPf8gqc49eD4evSbpNqL7pK3foA64xeSur89Q7fWyBsM4umvN3b28XNXCmvk4uzjXNxesxAHwuRhNCcz1",
  "key22": "YLm6dRhgBhrUL8Y5nf5GGQGULV4Gbek3mB2DgTErPRX2n8CKQJ5bpVrKAzZupVmPcfqQZbm345SujDCwxUeHAff",
  "key23": "GXDRaD7wnYQ2iM6Vq3kdwCcAJ2vNb2Q7qhEGNGt8njoX2hgZxymiEUoCVGYgbu7wKr8dgTabSzKXB1JRjro7oPF",
  "key24": "rHz7P6ooKBTXLG9sAcaiHJq5jT3JZGAbqMUM4eD4m9FbU8T1rs3E5ZJnwkSgDbSYE4aBKpX9UGF9f6c9THSbBja",
  "key25": "3NKQuxbTKVMbEnq6jPoiPBzPzGEQLtM7TJn2wF9WLaRxcUPZajRn1NBxyqqCJn57hgWwicm2rGb7ypGijcUALT4C",
  "key26": "manQ3R4qe3nQCKnozjp2WJXdGyVe15NxVq7KRusgErYTpTVfkSf279gaDSjaUSKwyxgSbM2socTSnEJMvz9bJxY",
  "key27": "2C1Yp6yw6P9HdZenCrGY334pjwDEarRva2qemfA84mUBnNrUiPhUhKUvgEZDSC4VriSJVPBaCwy1NFHLMqe2xut3",
  "key28": "4dEG1oXEYUy99d68SnV9bFCPmpWionw67ii4m39CDJYwPVKU4EGNso5oK33VTitReB4ALMGsM2dNSh9HN6E1J9G3",
  "key29": "4h49VmFMPKxjc4gXdeUvH7VsbooEbJrVrBGPvKdBNR89Qi6kk15N6utpFYdHX9daZkiZXByvYoGPy8wVKzupgZ7n",
  "key30": "Fgw3y5xZNcTGcu5WEwr9s9z3gYb68FGpCA2xFn25pDeL8GDQjppGWkn8wcauA1zC6XD3zE8SegaKodZFguaG9V3",
  "key31": "4MdRbavCzjhYvG3fk7S9LZWsmfAxdK4gpUZyMWM8q3DqNnJF75Cw5MVbxk1aHPvm625mHknoNAKooYP8j42tY9WW",
  "key32": "4MVQk9kmV59iGWiA9559oGx8oV7MzKZd7KWPtR26doXFpRp9c6n1S6k8Squ7TtY5xRKyFyaxzb6WXsYzPQJEGAeD",
  "key33": "2iFYFdFtRjLkePZDh7RoJ1UnmmUFBnzLYFU98dR8XhEZJn7Wq22CRsB7KPRzQNNbFXjaRmZtWyWgN6SSJ8bcENu",
  "key34": "PuPa5thRAA6iLfDREg83v5ezLHGyHRDtd7i2821n8MKmKGheDiwms9k6Dybvokm7TsYrXCSgzZKTKyQNoSacLms",
  "key35": "31WaFnqqDbRgiq3LhWMRLqBGvDuRhzQFcM3aftfypJ9qxKtwyUQL4yh7LArahviJMmoUSyGK9DTEEsTus9yrgRnU",
  "key36": "xN9z2baNAPgUuVaXKNLQj99YAYRXt27WCyuhTQJT5nLm1rR75GopeQMeQWSit3Gydfd2VnK4W8An2NBvyYcStnm",
  "key37": "378xMfKrL16Myut45wCAiraGJjd4c22k5vz8BARwgYT6kvLBYXdfiWAmXKhKM7xkG7VkFMq157xFWttHubLx3H37",
  "key38": "3ttURpWWQa7Jz2qyfc36eh2rXKsDMz7Yn5Zkz82kGTeAAh1E9d32B1RKFpDU9SEGq3K9AnKho1nTJ3EPRQvgm9qP",
  "key39": "xeifQmVEb4dkHVSKWZ9arckNakvazsVghfVzkz565117ktpkAPsmftBVQw95mS6S2D1W6gJn15yA3S3RUE6hpEm",
  "key40": "5vekDwuAzi4cKAAqB8AofemqYQDGw5c37SeyvizYukgPoLQbMwEfEFaXoZrcV95cV8qQUfkSuRdHguhApLRUmS8k",
  "key41": "emabF7h8ZSHDpmRJxWcjwAkCPmsZ5rqodvQFQma3eczyaz9g5eDKGAdfHXG6EX8noE2ckBCffZYPHYRTsp5PXD1",
  "key42": "3gFkTbZnKJ5gPx1AFTrkSVSoSvJdRhMrVNSbdr3WY3UM1FUttU7nW1UoyamS6nSLepYEQBdnXCCJMb2Ebj2q7kDQ",
  "key43": "3qZazmKmDjiYwue6shJsEbYZCS5LtaFrNNsUM1BFzcRrBckFMnW7U5vdpMv5yjzff6qRHh6E39dAuWFLAPb149Bx",
  "key44": "42TzpzyKtdiDc2JSz6o6A4rphVufLJpWtXh8fkQbpi1UVskqy5GDxn9F7HiFiF73b1ZHXsJUS11zk6dwuyyA8BZc",
  "key45": "boCJF44SFeepB22sSRnjFKYqHLcpMSc3hkqfaVabngyZHijtAxe2vM3uWZ8wM3smjKyRgrfjHnd7SfopEPaLcz7",
  "key46": "4TWMmNdv9wQ4kgyC7137LH88PZuX2672Rktv2ckBjQDeh9pK4S6v5YuCMqN2P6RYG6VaACZz5fyN7UhCcoTpaGG2",
  "key47": "3UPsQVLcGkWcWYkkzTGXRyPbsx6i6TR6gTb37NQ2521YcppSV4AA2xMZQgX8uG2zMNEvaqV1yfiCaegfn85hJjm"
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
