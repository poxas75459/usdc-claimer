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
    "3qMiD4j7wmYyyGch7NUp9XcL4a1hwuZKr9wUXsecG67NrgBekWxrzqcCft4vE4zhETUg4rvThvQgNkfBCjNSThnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64GTi8LrETK22Ft6eTCCncZtc1xUkPhkNqmC7sSxe2VpWdy5W7NabsF6xKFoBeH5ScJ7pfV7r2CANpfui3p8t7Li",
  "key1": "3Gy6ByAq3dfFDwG9bY1p2eHPBvH8h2eT1r8SfAHjGjYErzuiHqyzmbtFn5WF7rEH1VvF3Ldc6fA4qvnocJ1wXtpp",
  "key2": "ZpP9a7is7zSRjVt82GwA6AST2Kc3aWYT4RBbCvQWUJ5YKxgdzRZmWo8NP5TyMxrNFWUqroQBZeVspG1Wta3n51g",
  "key3": "4WUB6TPbP9EKN87SLFY1ddyh8E6duR7vasRbLdbVNvrFkSAEgaJTSgaQxv8ajVccF8Cir464MrB2ENyEP1d7PUEa",
  "key4": "2JPBVPet7Zznobs2bPRSNfRnPyCNTzgM6sFaUZ29V4dd28uTLpNQaL2PSM8N9LYhdeqR58ZegzDuoTSHtXY8uCVe",
  "key5": "5nkcxFZRqFPiE88kNVpov9Jr5R8aesNG27NWJUnCRdTRYRJmkxqXbReWJSfP1woCRYk7Gw7kC2UqZBNYCmSfkEyw",
  "key6": "3TXhNtF84v5k8cg6euVS1n3aDU8hHiUokwrapH67T6kVT76nYZzpzFXHU3iSNP5qt96jUw15BoQYMaRgd6DJncGy",
  "key7": "CzVp2AEHEze2SnhPh3uTPTdHb2U9zv2drBcF2mPjenPnfYujV7RLd7ftCxy9ZPvVYmwrH443s7piEYA8kB1S4Dp",
  "key8": "5VFtmCw4YHEgs74xaSV3xyR6a2EpJa2NwW6tusg5xFfynq8n9dfegNSwBRa7K4aLZMQRzTSktih7bApxswUkvDvE",
  "key9": "2GT7gcNyKkwiLpF6w5jpj7JYwFN5NNmpaFhKNe2wBUejhqB7QFZPWxSoTKxBe4Kzz2sKfxpaVuMcUT8euh9PBBx4",
  "key10": "2GpCnKJGjxsXST8L8Pk8SdpzsYQUExr7cm11FTNAiFutTFYSywtTCmBCdP9FK8PGSThDv57zhfuJFEGTqYKoUsUN",
  "key11": "3Ezp4XGdvJgp9tQZFB1hkEZNCUpJWs3dNtk2FBBjfgri9NSt4P8dzLKgbg8qeWdX9RDSkgD9px4Cx2wkD4UA6MZz",
  "key12": "3hgvjrjmyyc4RwBLwEZ3z7EYTv8KRAebnhpjHrjcdPMmvwUy6ULMk72QnQkMpKmAwwLtjWpJbuQsHKdx5VVtTNGZ",
  "key13": "57rhLDDqN28isqeYoWGvAfZbJr6dLz1oYQmLv2EmLWtkg1d2AykeS4dBwS3wTfiKxu5z3YoY8TzB7Y8bFEQp6nmA",
  "key14": "42JSci9MvvSQFnmKHoQ69KExbue8XvNGGjAs3tkTzn5H4pTPGDCqtk6BU6aAjNKcdFnfyK5KLYbzvGmGmQrqv4x",
  "key15": "2FjM1RhBgJrczo3vgugpLaixSFT2fUP9BMihUV2u2caAdvgE9pzepsvGa4xSVmZAMVE5pQTqNXfgTWGjyeNvCsFH",
  "key16": "34R3bsejyiXAXM1VaLNy4jja3i5irK1uGutXxDp8wrz7aAzQmo3D59hk1JAF4192NmdgKNfgizEVuEceCbKaLrQt",
  "key17": "4ZKzAfWipL4YF2KzGM8bCR3hBWSTNKVmJxx5FQDJG6WaYHmskhzcqNnbbzfGuCFtcRU5oCuf31cGAjKuFZM1P2Pd",
  "key18": "3S43kakLJ1GavAfyF1TMb2xMB23GdGX28BjaUPD6D8SYzGHeBzBj1GbAQ3QAs12vSjmTAoWgmBrUaxXx78Y2EbGz",
  "key19": "5jxAAaoXTK5cLQ3N9Zz8sboEYNuFiBajr4q5Mgy1vV5aVmcgCgiigNyeG7srr3u9k1hFrkpNr9it4hapfjFJpznp",
  "key20": "3Mav9mQdjoLQT5SGCs88cS6CHdV4duSZQRcnDu2Hs6HCSqwLATgJL2nouEvhLd2nJy9Xez68CGvBgShuPLSkFK3X",
  "key21": "35bkkwakkPNxKqrU2i6HQe8AZ4H5WRKGMRH8NYhUDduJq3KEZoJPocuSAdm8jpq5mJTeaiW3hBHikfLoRyRq4bXN",
  "key22": "H8vK6bUjeQBwSMkMpETHWs5Jehec8Bk6eRP1KrdhgZq5aCutMbjQ8zM5wPbXBABbWoFpyNzMY74vseSdC275ZeJ",
  "key23": "53i3imTA6AiXD4CLasAoR4owgqEVGKPcXno26n5ACtHCEZpdigxXUj4MaSKDqRq1YL6AbLLY83bvov9G1iLvQ8kT",
  "key24": "Wpoe43y2ix3pwz4Vk4QGt5NUWXr3MKmpE32qCyasPMLT5n1VcnnXC6maFT1V4HHQCYxGaBkN1AqotGJbKQ8zrJU",
  "key25": "4DTu7rEy15B1xEyxgixEtWGS6Z81pnhfxnNLtwvct3eXoKbDHFSb61WZpFSLZFn53PsNAcCuTyxK1mY3kRnBfx1T",
  "key26": "5GFFScTRxJ5v1L6LQuxE8a9Y9HGrVqysrv3Hds8N9QTMG1d9NXFtuLeTdjEAWo35m8CR5TLT8KkmJ6AmH84Z5fv8",
  "key27": "3fYHfEUsazCLN2ovBU4a67LZdFt7qqJMmPBR8XUi9Ds31XTEcsBciKgDqba7otH1wjDzCEffFbrAUAUDQu6AKSFN",
  "key28": "3e4YVfwPRDCfoHXMZDhbNJDZ14uvAdbCzxNDsNakSP1FRe42tbtJL6aM8PUANM9TfeQq5HhA8z3FnpoxYC2Wo8Ra"
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
